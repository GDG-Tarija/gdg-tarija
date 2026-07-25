---
name: design-system
description: Sistema de diseño, paleta de colores de Google, tipografías, maquetación Tailwind y Angular Material 3.
---

# GDG Events Platform — UI Context (Design System)

Este documento define el **contexto completo de UI** para GDG Events Platform.

---

## 1. Landing pública (home `/`)

La home pública reemplazó el hero anterior y ahora es una **landing de próximos eventos**.

### 1.1. Hero
- Título: `Próximos Eventos` en `gdg-h1`.
- Sin descripción larga ni CTA hero (la conversión ocurre en las cards).

### 1.2. Lista de eventos
- Columna única, cards horizontales con `flex flex-col sm:flex-row`.
- Cards blancas (`gdg-card`), `rounded-3xl`, `shadow-sm`.
- Mientras `isEventLoading`: mostrar skeletons (misma estructura que la card).
- Si no hay eventos: empty state simple.

### 1.3. Footer público
- 4 iconos Material Symbols Rounded centrados.
- Texto: `Plataforma hecha en casa por GDG Tarija`.

### 1.4. Event Card
- Layout horizontal: `flex flex-col sm:flex-row` con imagen a la izquierda (sm:w-72).
- Imagen `aspect-video` en mobile, altura completa en desktop.
- Placeholder si no hay imagen: `event-image-placeholder` (bloques con acentos Google sin degradados).
- Fecha en `text-google-blue` con icono `calendar_month`.
- Título `text-2xl font-bold` con `leading-tight`.
- Botón “Registrarse” `gdg-btn-filled`, alineado a la derecha en desktop.
- Click en body (menos botón) navega a `/e/:slug`.

### 1.5. Skeleton
- Usar componente `event-card-skeleton` con `animate-pulse`.
- Misma estructura exacta que `event-card` para evitar layout shift.

### 1.6. Ruta de detalle
- `/e/:slug` — componente placeholder por ahora.
- Se completa cuando se integre el backend.

---

## 2. Stack UI

- **Angular Material 3**: componentes (botones, toolbar, dialog, menu, form-field, etc.).
- **Tailwind CSS**: layout, spacing, tipografia, utilities y clases de sistema.
- **SCSS global**: tokens CSS variables + overrides puntuales.

> **Regla**: Material para interaccion/semantica; Tailwind para composicion visual. No usar Bootstrap.

---

## 3. Theme

- **Light-first**: el tema por defecto es claro.
- **Modo oscuro**: se activa con `data-theme="dark"` en `<html>`.
- Persistencia: `localStorage['mecha-theme']` (`light` | `dark`).

Archivos:
- `src/app/core/services/theme.ts`
- `src/material-theme.scss`
- `src/styles/_variables.scss`

---

## 4. Tipografía

- Fuente principal: **Google Sans (local)**.
- Fuente fallback: `system-ui, Segoe UI, Roboto, Arial, sans-serif`.
- Fuente global: se aplica a nivel `html/body` (no hay que declarar `font-google` en cada componente).

Fuentes locales:
- Carpeta: `src/assets/fonts/google-sans/`
- Carga: `@font-face` en `src/styles.scss`
- El build copia assets via `angular.json` a `/assets/**`.

Tailwind:
- `font-google` => `['Google Sans', 'system-ui', 'sans-serif']`

---

## 5. Iconografía

- Material Symbols Rounded (para iconos inline): clase `.material-symbols-rounded`.
- Material Icons se mantiene para `<mat-icon>` existente.

Archivo:
- `src/index.html`

---

## 6. Logos

Los logos están servidos desde **Cloudinary** y referenciados en `src/app/core/config/logos.ts`:

| Constante | Descripción | URL |
|---|---|---|
| `LOGOS.icon` | Solo icono GDG, sin texto | `logoGDG_Tarija_nox4y2` |
| `LOGOS.horizontal` | Horizontal con icono + texto | `gdg_tarija_logo_t3xzpo` |
| `LOGOS.square` | Cuadrado con icono + texto | `logoGDGTarija_lyzyzo` |

Modo de uso:
```ts
import { LOGOS } from '../../core/config/logos';
// LOGOS.icon, LOGOS.horizontal, LOGOS.square
// Cada uno tiene: { src: string, alt: string }
```

Uso en template:
```html
<img [src]="logo.src" [alt]="logo.alt" class="h-8 w-auto" />
```

---

## 7. Color Tokens

### 7.1. Tailwind colors
Definidos en `tailwind.config.js`:
- `google-blue` `#4285F4`
- `google-red` `#EA4335`
- `google-yellow` `#FBBC05`
- `google-green` `#34A853`
- `google-*-light`: `blue-light`, `red-light`, `yellow-light`, `green-light`
- `surface-main` `#F8F9FA`
- `surface-paper` `#FFFFFF`
- `text-primary` `#202124`
- `text-secondary` `#5F6368`

### 7.2. CSS variables
En `src/styles/_variables.scss`:
- `--gdg-google-blue|red|yellow|green`
- `--gdg-google-*-light`
- tokens existentes para tablas, borders, danger, etc. (con override dark)

---

## 8. Spacing / Layout

- Base spacing: usar utilidades Tailwind (`p-*`, `m-*`, `gap-*`).
- Contenedor: `.gdg-container` (max width + padding horizontal).
- Pagina: `.gdg-page` (altura minima y padding vertical).

> Mobile-first en vistas publicas; desktop-first en `/dashboard`.

---

## 9. Shapes (Radii) y Shadows

- Botones: `rounded-full`.
- Cards: `rounded-3xl`.
- Shadows: Evitar sombras negras duras. Default card utiliza `shadow-sm`.

---

## 10. Motion

- Transiciones: `duration-300 ease-in-out`.
- Boton active: `active:scale-[0.98]`.

---

## 11. Component Classes

Definidas en `src/styles.scss` bajo `@layer components`:
- Botones:
  - `.gdg-btn-filled`
  - `.gdg-btn-outlined`
  - `.gdg-btn-ghost`
- Superficies:
  - `.gdg-card`
  - `.gdg-event-card`
- Tipografia:
  - `.gdg-h1`, `.gdg-h2`, `.gdg-body`
- Layout:
  - `.gdg-container`, `.gdg-page`
- Loading:
  - `.gdg-spinner`

---

## 12. Auth UX

Regla de UX: en navbar publico **no mostrar “Iniciar sesion” mientras `auth.loading()`**.

Archivo:
- `src/app/layouts/public-layout/public-layout.html`

---

## 13. Convenciones de Diseño y Estilo

- No activar Tailwind preflight (`preflight: false`) para no romper Material.
- Preferir clases Tailwind en templates nuevos. SCSS por componente solo para casos puntuales.
- Accesibilidad: iconos sin texto con `aria-label`.
- No usar degradados como background en contenedores, secciones o cards. Si se necesita, debe pedirse explicitamente.
- Evitar valores arbitrarios de Tailwind tipo `w-[...]`, `min-h-[...]`, `shadow-[...]`, `scale-[...]`. Usar tokens/clases del DS o escalas standard de Tailwind, salvo que se pida explicitamente.
