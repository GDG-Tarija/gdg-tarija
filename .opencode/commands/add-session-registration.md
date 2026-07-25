# Comando: Inscripción a sesiones de un evento multi-track

Implementa la funcionalidad de selección de sesiones dentro del flujo de registro público de un evento.

Utiliza un razonamiento: adaptive thinking

---

## Contexto del negocio

Un evento puede tener **dos tracks que se ejecutan en paralelo** (ej. Track A y Track B), cada uno con varias sesiones correlativas en el tiempo.

Un asistente puede inscribirse a las sesiones que desee, **con una única restricción**: no puede elegir dos sesiones que ocurran al mismo tiempo (mismo slot temporal). Es decir:

- ✅ Puede tomar Track A - Sesión 1 + Track A - Sesión 2 (mismo track, slots distintos)
- ✅ Puede tomar Track A - Sesión 1 + Track B - Sesión 2 (tracks distintos, slots distintos)
- ❌ No puede tomar Track A - Sesión 1 + Track B - Sesión 1 (tracks distintos, mismo slot)

El objetivo es: **control de asistentes por sesión** (cuántos van a estar en cada espacio físico) y **balance de capacidad entre tracks**.

---

## Estado actual de la base de datos

Las siguientes tablas ya existen (ver `.opencode/skills/database-and-features/SKILL.md`):

- `tracks`: `id`, `evento_id`, `nombre`, `descripcion`, `created_at`
- `sessions`: `id`, `event_id`, `title`, `capacity`, `created_at`, `updated_at`
- `session_registrations`: `registration_id` (FK → registrations), `session_id` (FK → sessions), `registered_at`

> **Nota**: `tracks` usa `evento_id` (no `event_id`) y `nombre` (no `name`) — respetar estos nombres exactos.

---

## Paso 0 — Migración de base de datos (OBLIGATORIO PRIMERO)

La tabla `sessions` actual no tiene relación con `tracks` ni información de horario. Antes de cualquier código frontend, crear la migración:

**Archivo**: `supabase/migrations/<timestamp>_sessions_add_track_and_slot.sql`

```sql
-- 1. Agregar track_id y time_slot a sessions
ALTER TABLE public.sessions
  ADD COLUMN IF NOT EXISTS track_id uuid REFERENCES public.tracks(id) ON DELETE SET NULL,
  ADD COLUMN IF NOT EXISTS time_slot smallint NOT NULL DEFAULT 1,
  ADD COLUMN IF NOT EXISTS description text;

-- time_slot: número de orden del slot temporal (1 = primer bloque horario, 2 = segundo, etc.)
-- Dos sesiones con el mismo time_slot son concurrentes → no se pueden elegir juntas.

-- 2. Habilitar RLS en session_registrations si no está activo
ALTER TABLE public.session_registrations ENABLE ROW LEVEL SECURITY;

-- Policy: el propio usuario puede insertar su inscripción a sesiones
CREATE POLICY "attendee_insert_own_session_reg"
  ON public.session_registrations FOR INSERT
  WITH CHECK (
    registration_id IN (
      SELECT id FROM public.registrations WHERE user_id = auth.uid()
    )
  );

-- Policy: lectura pública de conteo de inscritos por sesión (para mostrar disponibilidad)
CREATE POLICY "public_read_session_registrations"
  ON public.session_registrations FOR SELECT
  USING (true);
```

Luego de aplicar la migración, regenerar tipos:

```bash
supabase gen types typescript --local > src/app/core/supabase/supabase.client.ts
```

Actualizar también `.opencode/skills/database-and-features/SKILL.md` con las columnas nuevas.

---

## Paso 1 — Servicio de sesiones

**Archivo**: `src/app/core/services/supabase/sb-sessions.ts`

El servicio debe exponer:

```typescript
// Obtener sesiones de un evento agrupadas con su track y conteo de inscritos
listByEvent(eventId: string): Observable<SessionWithTrack[]>

// Obtener cuántos registrados tiene cada sesión (para mostrar disponibilidad)
getSessionCounts(sessionIds: string[]): Observable<Record<string, number>>

// Guardar las sesiones elegidas al confirmar el registro
saveSessionRegistrations(registrationId: string, sessionIds: string[]): Observable<void>
```

Interfaz de dominio:

```typescript
export interface SessionWithTrack {
  id: string;
  event_id: string;
  title: string;
  description: string | null;
  capacity: number;
  time_slot: number; // slot concurrente (1, 2, ...)
  track_id: string | null;
  track_name: string | null; // nombre del track (ej. "Track A")
  enrolled_count: number; // inscritos actuales (calculado en la query)
}
```

Usar el patrón existente de `sb-sponsor.ts` (RxJS + BehaviorSubject). Para `listByEvent` hacer un join:

```typescript
this.supabase
  .from('sessions')
  .select(`*, tracks(nombre)`)
  .eq('event_id', eventId)
  .order('time_slot')
  .order('track_id');
```

---

## Paso 2 — Componente selector de sesiones

**Archivo**: `src/app/features/public/events/registration/components/session-picker/session-picker.ts`

Componente standalone que recibe:

- `input: sessions` — lista de `SessionWithTrack[]`
- `output: selectionChange` — emite `string[]` (IDs de sesiones seleccionadas)

### Lógica de conflicto (cliente)

Agrupar sesiones por `time_slot`. Cuando el usuario selecciona una sesión en el slot X, desmarcar automáticamente cualquier otra sesión ya seleccionada en ese mismo slot. No mostrar error — simplemente reemplazar la selección del slot.

```typescript
// Pseudo-lógica
onToggle(session: SessionWithTrack): void {
  const current = this.selected();
  // Quitar todas las del mismo time_slot
  const filtered = current.filter(id => {
    const s = this.sessions().find(x => x.id === id);
    return s?.time_slot !== session.time_slot;
  });
  // Agregar la nueva (toggle: si ya estaba → deseleccionar)
  const next = filtered.includes(session.id)
    ? filtered.filter(id => id !== session.id)
    : [...filtered, session.id];
  this.selected.set(next);
  this.selectionChange.emit(next);
}
```

### Visualización

- **Agrupar por `time_slot`** — mostrar cada slot como una sección: "Bloque 1", "Bloque 2", etc.
- Dentro de cada bloque, mostrar las sesiones disponibles en ese slot (una por track).
- **Card por sesión** similar a las ticket cards del checkout existente:
  - Nombre del track en badge de color (`google-blue` para Track A, `google-green` para Track B, etc.)
  - Título de la sesión
  - Capacidad restante: `Quedan X lugares` (capacity - enrolled_count)
  - Si `enrolled_count >= capacity` → mostrar "Completo" y deshabilitar selección
- Sesión seleccionada: borde `google-blue` + fondo sutil (igual que las ticket cards)
- No usar checkboxes ni radio buttons de Material — usar el patrón de botón/card existente en `event-registration-checkout.ts`

---

## Paso 3 — Integrar en `EventRegistrationCheckout`

**Archivo**: `src/app/features/public/events/registration/components/event-registration-checkout.ts`

Agregar un nuevo paso entre "Tickets" y "Preguntas dinámicas" **solo si el evento tiene sesiones** (`hasSessions` computed).

```typescript
readonly sessions = signal<SessionWithTrack[]>([]);
readonly selectedSessionIds = signal<string[]>([]);
readonly hasSessions = computed(() => this.sessions().length > 0);
```

En `init()`, cargar sesiones:

```typescript
const sessionList = await firstValueFrom(this.sbSessions.listByEvent(this.event().id));
this.sessions.set(sessionList ?? []);
```

En el template, agregar la sección:

```html
@if (hasSessions()) {
<hr class="border-t border-black/5 my-4" />
<div class="space-y-4">
  <div class="flex items-center gap-2 pb-2 border-b border-black/5">
    <span class="material-symbols-rounded text-base text-google-blue" aria-hidden="true">
      event_seat
    </span>
    <h3 class="text-xs font-bold text-text-primary uppercase tracking-wider m-0">
      Elige tus sesiones
    </h3>
  </div>
  <app-session-picker [sessions]="sessions()" (selectionChange)="selectedSessionIds.set($event)" />
</div>
}
```

En `canSubmit`, **no bloquear** si el usuario no elige sesiones — la inscripción al evento es válida sin sesiones (las sesiones son opt-in). Solo agregar una advertencia visual si `hasSessions() && selectedSessionIds().length === 0`.

En `submit()`, después de `await this.registrations.createRegistration(...)`, si hay sesiones seleccionadas:

```typescript
if (this.selectedSessionIds().length > 0) {
  await firstValueFrom(
    this.sbSessions.saveSessionRegistrations(registration.id, this.selectedSessionIds()),
  );
}
```

---

## Paso 4 — Validación en base de datos (RLS / constraint)

Agregar una función o trigger en Supabase que impida insertar dos `session_registrations` con el mismo `registration_id` y sesiones del mismo `time_slot`.

**Archivo**: `supabase/migrations/<timestamp>_prevent_concurrent_session_conflict.sql`

```sql
-- Función que valida que no haya conflicto de time_slot para la misma registration
CREATE OR REPLACE FUNCTION public.check_session_time_slot_conflict()
RETURNS trigger AS $$
DECLARE
  v_time_slot smallint;
  v_event_id uuid;
BEGIN
  -- Obtener time_slot y event_id de la sesión nueva
  SELECT s.time_slot, s.event_id INTO v_time_slot, v_event_id
  FROM public.sessions s WHERE s.id = NEW.session_id;

  -- Verificar que no exista ya una sesión del mismo time_slot para esta registration
  IF EXISTS (
    SELECT 1
    FROM public.session_registrations sr
    JOIN public.sessions s ON s.id = sr.session_id
    WHERE sr.registration_id = NEW.registration_id
      AND s.time_slot = v_time_slot
      AND sr.session_id <> NEW.session_id
  ) THEN
    RAISE EXCEPTION 'Conflicto de horario: ya estás inscrito en otra sesión del mismo bloque horario.';
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_session_time_slot_conflict
  BEFORE INSERT ON public.session_registrations
  FOR EACH ROW EXECUTE FUNCTION public.check_session_time_slot_conflict();
```

---

## Paso 5 — Verifica y ajusta

1. Confirmar que `sessions` ya tiene datos de prueba o crear seed en `supabase/seeds/sessions.sql`.
2. Correr `npm run build` para verificar que no hay errores de tipos.
3. Correr `npm test` para los servicios nuevos.
4. Probar manualmente el flujo en `/e/:slug` con un evento que tenga sesiones configuradas.

---

## Restricciones del proyecto a respetar

- Solo Angular Material + Tailwind. Ver `.opencode/skills/design-system/SKILL.md`.
- No importar `@supabase/supabase-js` en componentes — solo en servicios de `core/services/supabase/`.
- Signals para estado de UI; Observable solo en el servicio (`sb-sessions.ts`).
- Standalone components, sin NgModule.
- Sigue el patrón visual de las ticket cards en el checkout existente para las session cards.
- Labels y textos en español; clases, variables y métodos en inglés.
