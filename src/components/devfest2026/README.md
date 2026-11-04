# Landing DevFest Tarija 2026

Estructura base. Cada sección es un placeholder (`ComponentPlaceholder`) que indica qué lleva y qué vista del mockup seguir. Implementar un issue es reemplazar ese placeholder.

Dentro de cada carpeta puedes crear los componentes que la sección necesite. Si varias secciones usan el mismo, muévelo a `common/`.

La ruta de trabajo es `/devfest-2026`. `/devfest` sigue redirigiendo al registro hasta el lanzamiento.

## Reglas

- **Variables:** todo sale de `src/styles/devfest2026.css` y de los colores `gdg-*` de `global.css`. Nada de valores sueltos.
  - Color: `text-df-ink`, `bg-df-ground`, `bg-gdg-pastel-blue`
  - Texto: `text-df-headline`, `text-df-title`, `text-df-label`
  - Espacio: `gap-df-md`, `p-df-lg`, `py-df-section`
  - Forma: `rounded-df-card`, `shadow-df-sticker`, `max-w-df`
- **Tonos:** `SectionShell` recibe `tone` y ajusta tinta y línea. Dentro de una sección usa `text-df-ink-*`, nunca blanco o gris fijo.
- **Datos:** fecha, precio y enlaces viven en `EVENT` (`data.ts`).
- **Responsive:** una sola página. Usa `landing/main.html` como referencia desde `lg` y `landing/mobile.html` por debajo de `sm`.
- **Interactividad:** `<script>` de Astro con TypeScript, como el resto del sitio. El proyecto no tiene framework de UI, así que `client:visible` no aplica. Los minijuegos se cargan con `import()` al abrirlos.
- **Mockup:** las vistas de `devfest-views/` son estáticas y traen estilos inline. Tradúcelos a variables y utilidades, no los copies.

## Estructura

```
src/pages/devfest-2026.astro   orden de las secciones
src/styles/devfest2026.css     variables y tonos
src/components/devfest2026/
  data.ts                      EVENT
  common/                      SectionShell y ComponentPlaceholder
  header/  hero/  about/       Header, Hero, About
  passport/                    PassportSection
  agenda/  speakers/  fair/    Agenda, Speakers, Fair
  ticket/  faq/  location/     Ticket, FAQ, Location
  closing/  mobile-bar/        Closing, MobileBar
```
