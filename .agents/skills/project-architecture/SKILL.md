---
name: project-architecture
description: Directrices técnicas de Angular 21, Signals, Supabase Client y patrones de desarrollo del proyecto GDG.
---

# Contexto Técnico y Arquitectura del Proyecto (GDG Events Platform)

> Este archivo le da al agente todo lo necesario para generar código **idiomático** al stack: patrones, ejemplos, decisiones tomadas y razones detrás.

📎 Ver también: [`AGENTS.md`](../../../AGENTS.md) (reglas y comandos), [database-and-features](../database-and-features/SKILL.md) (esquema DB).

---

## 1. Stack y versiones

| Capa | Tecnología | Versión |
|---|---|---|
| Framework | Angular | 21 (standalone + signals) |
| UI | Angular Material | 3 (Material You) |
| Forms | Signal Forms | (incluido en Angular 21) |
| Backend / BaaS | Supabase | latest |
| Cliente Supabase | `@supabase/supabase-js` | v2 |
| Lenguaje | TypeScript | 5.x estricto |
| Test runner | Karma + Jasmine | (default Angular) |
| Lint | ESLint + `@angular-eslint` | |
| Formato | Prettier | |
| PWA | `@angular-service-worker` | |

**Restricciones:**
- No introducir librerías UI adicionales (nada de Bootstrap, Tailwind, PrimeNG).
- No usar RxJS para estado de UI; usar **signals**. RxJS solo para flujos HTTP o eventos asíncronos donde aporte (ej. debounce de búsqueda).
- No usar `NgModule`. Todo es standalone.

---

## 2. Filosofía del proyecto

1. **El MVP debe ser usable de punta a punta en cada hito.** Nunca dejar features a medias entre PRs.
2. **RLS antes que guards.** La seguridad vive en SQL; el frontend solo mejora UX.
3. **El esquema manda.** Si el skill `database-and-features` no documenta algo, no existe. Migración primero, código después.
4. **Tipos generados, no escritos.** `supabase gen types` es la única fuente de verdad para tipos de DB.
5. **Mobile-first donde el usuario es asistente; desktop-first donde es organizador.**

---

## 3. Estructura de directorios (detallada)

```
src/app/
├── core/
│   ├── auth/
│   │   ├── auth.service.ts         # SupabaseAuthService (sesión, signIn, signOut)
│   │   ├── auth.guard.ts           # bloquea rutas sin sesión
│   │   ├── role.guard.ts           # bloquea por rol (organizer, super_admin)
│   │   └── auth.types.ts
│   ├── supabase/
│   │   ├── supabase.client.ts      # provider del cliente tipado
│   │   └── supabase.tokens.ts      # InjectionTokens si hace falta
│   ├── models/
│   │   ├── database.types.ts       # GENERADO por `supabase gen types`. NO EDITAR.
│   │   └── domain.types.ts         # tipos de dominio derivados/aliasados
│   └── config/
│       └── app.config.ts           # configuración runtime (env vars resueltas)
│
├── shared/
│   ├── components/
│   │   ├── file-upload/            # subida con preview, validación de tamaño/tipo
│   │   ├── empty-state/
│   │   ├── loading-skeleton/
│   │   └── confirm-dialog/
│   ├── pipes/
│   │   └── relative-time.pipe.ts   # "hace 3 horas"
│   ├── directives/
│   └── validators/
│       ├── email.validator.ts
│       └── phone-bo.validator.ts   # validador de celular Bolivia
│
├── features/
│   ├── auth/
│   │   ├── login/
│   │   │   ├── login.component.ts
│   │   │   └── login.component.scss
│   │   ├── callback/
│   │   │   └── callback.component.ts   # maneja redirect de magic link
│   │   └── auth.routes.ts
│   │
│   ├── events/
│   │   ├── data/
│   │   │   ├── events.service.ts       # CRUD vía Supabase
│   │   │   └── events.service.spec.ts
│   │   ├── pages/
│   │   │   ├── event-list/             # /dashboard - listado del organizador
│   │   │   ├── event-form/             # /events/new, /events/:id/edit
│   │   │   ├── event-detail/           # /events/:id - vista interna
│   │   │   └── event-public/           # /e/:slug - landing pública
│   │   ├── components/
│   │   │   ├── event-card/
│   │   │   └── event-status-chip/
│   │   └── events.routes.ts
│   │
│   ├── registration/
│   │   ├── data/
│   │   │   └── registrations.service.ts
│   │   ├── pages/
│   │   │   ├── registration-form/      # /e/:slug/register
│   │   │   └── registration-success/   # /e/:slug/success
│   │   └── registration.routes.ts
│   │
│   ├── attendees/
│   │   ├── data/
│   │   ├── pages/
│   │   │   └── attendee-list/          # /events/:id/attendees
│   │   └── attendees.routes.ts
│   │
│   └── dashboard/
│       └── pages/
│           └── dashboard-home/         # /dashboard - home del organizador
│
├── layouts/
│   ├── public-layout/                  # navbar mínimo, footer, mobile-first
│   └── organizer-layout/               # sidenav, top bar, desktop-first
│
├── app.config.ts                       # providers raíz
├── app.routes.ts                       # rutas raíz con lazy loading
├── app.component.ts                    # shell mínimo
```

---

## 4. Configuración del cliente Supabase

```typescript
// src/app/core/supabase/supabase.client.ts
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { InjectionToken, Provider } from '@angular/core';
import { environment } from '@/environments/environment';
import { Database } from '@/core/models/database.types';

export const SUPABASE = new InjectionToken<SupabaseClient<Database>>('SUPABASE');

export const supabaseProvider: Provider = {
  provide: SUPABASE,
  useFactory: () =>
    createClient<Database>(environment.supabaseUrl, environment.supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true, // necesario para magic link callback
      },
    }),
};
```

Registrar en `app.config.ts`:

```typescript
// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { supabaseProvider } from '@/core/supabase/supabase.client';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    supabaseProvider,
  ],
};
```

---

## 5. Patrones de código

### 5.1. Service que toca Supabase

Patrón base. Todos los services siguen esta estructura: `inject(SUPABASE)`, métodos async que devuelven el dato directo (no el wrapper `{ data, error }`), errores como excepciones tipadas.

```typescript
// src/app/features/events/data/events.service.ts
import { Injectable, inject } from '@angular/core';
import { SUPABASE } from '@/core/supabase/supabase.client';
import { Database } from '@/core/models/database.types';

type Event = Database['public']['Tables']['events']['Row'];
type EventInsert = Database['public']['Tables']['events']['Insert'];
type EventUpdate = Database['public']['Tables']['events']['Update'];

@Injectable({ providedIn: 'root' })
export class EventsService {
  private readonly supabase = inject(SUPABASE);

  async listMine(): Promise<Event[]> {
    const { data, error } = await this.supabase
      .from('events')
      .select('*')
      .order('starts_at', { ascending: false });

    if (error) throw error;
    return data ?? [];
  }

  async getBySlug(slug: string): Promise<Event | null> {
    const { data, error } = await this.supabase
      .from('events')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (error) throw error;
    return data;
  }

  async create(input: EventInsert): Promise<Event> {
    const { data, error } = await this.supabase
      .from('events')
      .insert(input)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async update(id: string, patch: EventUpdate): Promise<Event> {
    const { data, error } = await this.supabase
      .from('events')
      .update(patch)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  async remove(id: string): Promise<void> {
    const { error } = await this.supabase.from('events').delete().eq('id', id);
    if (error) throw error;
  }
}
```

### 5.2. Componente que consume un service con signals

```typescript
// src/app/features/events/pages/event-list/event-list.component.ts
import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { EventsService } from '@/features/events/data/events.service';
import { Database } from '@/core/models/database.types';

type Event = Database['public']['Tables']['events']['Row'];

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
})
export class EventListComponent implements OnInit {
  private readonly eventsService = inject(EventsService);

  readonly events = signal<Event[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  readonly hasEvents = computed(() => this.events().length > 0);

  async ngOnInit(): Promise<void> {
    try {
      const data = await this.eventsService.listMine();
      this.events.set(data);
    } catch (err) {
      this.error.set(err instanceof Error ? err.message : 'Error al cargar eventos');
    } finally {
      this.loading.set(false);
    }
  }
}
```

### 5.3. Signal Form (Angular 21)

```typescript
// src/app/features/registration/pages/registration-form/registration-form.component.ts
import { Component, inject, signal } from '@angular/core';
import { form, Control, required, email, maxLength } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

interface RegistrationData {
  email: string;
  fullName: string;
  phone: string;
  referralSource: string;
  university: string | null;
  experienceLevel: string;
  notes: string | null;
}

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, Control],
  templateUrl: './registration-form.component.html',
})
export class RegistrationFormComponent {
  private readonly data = signal<RegistrationData>({
    email: '',
    fullName: '',
    phone: '',
    referralSource: '',
    university: null,
    experienceLevel: '',
    notes: null,
  });

  readonly registrationForm = form(this.data, (path) => {
    required(path.email);
    email(path.email);
    required(path.fullName);
    required(path.phone);
    required(path.referralSource);
    required(path.experienceLevel);
    maxLength(path.notes, 500);
  });

  readonly referralOptions = [
    { value: 'instagram', label: 'Instagram' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'twitter_x', label: 'Twitter / X' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'telegram', label: 'Telegram' },
    { value: 'friend', label: 'Un amigo / colega' },
    { value: 'university', label: 'Mi universidad' },
    { value: 'previous_event', label: 'Evento anterior' },
    { value: 'gdg_website', label: 'Sitio web de GDG' },
    { value: 'other', label: 'Otro' },
  ];

  readonly experienceOptions = [
    { value: 'student', label: 'Estudiante' },
    { value: 'beginner', label: 'Principiante (0-1 año)' },
    { value: 'intermediate', label: 'Intermedio (2-4 años)' },
    { value: 'advanced', label: 'Avanzado (5+ años)' },
    { value: 'expert', label: 'Experto / Lead' },
    { value: 'non_technical', label: 'Perfil no técnico' },
  ];

  async onSubmit(): Promise<void> {
    if (this.registrationForm().invalid()) return;
    // ... llamar al service
  }
}
```

### 5.4. Subida de archivo a Supabase Storage

```typescript
// fragmento del registrations.service.ts
async uploadPaymentProof(
  eventId: string,
  registrationId: string,
  file: File,
): Promise<string> {
  const ext = file.name.split('.').pop()?.toLowerCase() ?? 'bin';
  const path = `${eventId}/${registrationId}.${ext}`;

  const { error } = await this.supabase.storage
    .from('payment-receipts')
    .upload(path, file, {
      upsert: true,
      contentType: file.type,
    });

  if (error) throw error;
  return path; // guardar este path en registrations.payment_proof_path
}

async getPaymentProofUrl(path: string): Promise<string> {
  // Firmamos URL temporal (bucket privado)
  const { data, error } = await this.supabase.storage
    .from('payment-receipts')
    .createSignedUrl(path, 3600); // 1 hora

  if (error) throw error;
  return data.signedUrl;
}
```

### 5.5. Guard de ruta basado en rol

```typescript
// src/app/core/auth/role.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserRole } from '@/core/models/domain.types';

export function roleGuard(allowed: UserRole[]): CanActivateFn {
  return async () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    const profile = await auth.getCurrentProfile();
    if (!profile || !allowed.includes(profile.role)) {
      router.navigate(['/login']);
      return false;
    }
    return true;
  };
}
```

Uso en rutas:

```typescript
// src/app/features/events/events.routes.ts
import { Routes } from '@angular/router';
import { roleGuard } from '@/core/auth/role.guard';

export const eventsRoutes: Routes = [
  {
    path: 'dashboard',
    canActivate: [roleGuard(['organizer', 'super_admin'])],
    loadComponent: () =>
      import('./pages/event-list/event-list.component').then((m) => m.EventListComponent),
  },
  {
    path: 'events/new',
    canActivate: [roleGuard(['organizer', 'super_admin'])],
    loadComponent: () =>
      import('./pages/event-form/event-form.component').then((m) => m.EventFormComponent),
  },
  {
    path: 'e/:slug',
    loadComponent: () =>
      import('./pages/event-public/event-public.component').then((m) => m.EventPublicComponent),
  },
];
```

### 5.6. Test de un service

```typescript
// src/app/features/events/data/events.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { EventsService } from './events.service';
import { SUPABASE } from '@/core/supabase/supabase.client';

describe('EventsService', () => {
  let service: EventsService;
  let supabaseMock: any;

  beforeEach(() => {
    supabaseMock = {
      from: jasmine.createSpy('from').and.returnValue({
        select: jasmine.createSpy('select').and.returnValue({
          order: jasmine
            .createSpy('order')
            .and.resolveTo({ data: [{ id: '1', title: 'Test' }], error: null }),
        }),
      }),
    };

    TestBed.configureTestingModule({
      providers: [EventsService, { provide: SUPABASE, useValue: supabaseMock }],
    });

    service = TestBed.inject(EventsService);
  });

  it('listMine returns events', async () => {
    const result = await service.listMine();
    expect(result.length).toBe(1);
    expect(supabaseMock.from).toHaveBeenCalledWith('events');
  });
});
```

---

## 6. Rutas raíz

```typescript
// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/public-layout/public-layout.component').then((m) => m.PublicLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/events/pages/event-public-home/event-public-home.component').then(
            (m) => m.EventPublicHomeComponent,
          ),
      },
      {
        path: 'e/:slug',
        loadChildren: () =>
          import('./features/events/events.routes').then((m) => m.publicEventRoutes),
      },
      {
        path: 'login',
        loadChildren: () => import('./features/auth/auth.routes').then((m) => m.authRoutes),
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./layouts/organizer-layout/organizer-layout.component').then(
        (m) => m.OrganizerLayoutComponent,
      ),
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.routes').then((m) => m.dashboardRoutes),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./features/events/events.routes').then((m) => m.organizerEventRoutes),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
```

---

## 7. Variables de entorno

```typescript
// src/environments/environment.ts (NO commitear valores reales)
export const environment = {
  production: false,
  supabaseUrl: 'http://localhost:54321',
  supabaseAnonKey: 'eyJ...', // anon key del proyecto local
};
```

Para producción usar `environment.prod.ts`. **Nunca** poner `service_role` aquí.

---

## 8. Tema Material 3 — paleta GDG

```scss
// src/styles/_theme.scss
@use '@angular/material' as mat;

// Paleta oficial GDG: azul, rojo, amarillo, verde
$gdg-primary: mat.define-palette((
  50: #e8f0fe, 100: #d2e3fc, 500: #4285f4, 700: #1a73e8, 900: #174ea6,
  contrast: (500: white, 700: white)
));
$gdg-accent: mat.define-palette((
  500: #ea4335, 700: #c5221f, contrast: (500: white, 700: white)
));
$gdg-warn: mat.define-palette((
  500: #fbbc04, 700: #f29900, contrast: (500: black, 700: black)
));

$theme: mat.define-light-theme((
  color: (primary: $gdg-primary, accent: $gdg-accent, warn: $gdg-warn),
  typography: mat.define-typography-config($font-family: 'Google Sans, Roboto, sans-serif'),
  density: 0,
));

@include mat.all-component-themes($theme);
```

---

## 9. Anti-patrones que NO se aceptan

- ❌ Importar `@supabase/supabase-js` directamente en un componente.
- ❌ Usar `any` sin justificar en comentario.
- ❌ Pasar el `SupabaseClient` por `@Input()`.
- ❌ Lógica de negocio en templates HTML.
- ❌ Llamar a `.from('tabla')` sin tipos genéricos (perderías el type-safety).
- ❌ Reactive Forms clásicos para formularios nuevos (usar Signal Forms).
- ❌ `NgModule` en código nuevo.
- ❌ Subscripciones a observables sin `takeUntilDestroyed()` o `async` pipe.
- ❌ Editar `database.types.ts` a mano.
- ❌ Cambios en el esquema sin migración versionada.
- ❌ Lógica de permisos solo en frontend (sin policy RLS detrás).
