# Landing DevFest Tarija 2026

Estructura base. Cada sección es un placeholder (`ComponentPlaceholder`) que indica qué lleva. Implementar un issue es reemplazar ese placeholder.

Dentro de cada carpeta puedes crear los componentes que la sección necesite. Si varias secciones usan el mismo, muévelo a `common/`.

La ruta de trabajo es `/devfest-2026` y el catálogo de componentes base está en `/devfest-2026/base`. `/devfest` sigue redirigiendo al registro hasta el lanzamiento.

## Componentes base

| Componente                                | Uso                                                     |
| ----------------------------------------- | ------------------------------------------------------- |
| `components/common/Button.astro`          | Botones del sitio. Sobre azul o verde, variante inverse |
| `components/common/ArrowLink.astro`       | Enlace con flecha. Solo en tonos `surface` y `ground`   |
| `devfest2026/common/SectionShell.astro`   | Contenedor de sección con su tono                       |
| `devfest2026/common/SectionHeading.astro` | Eyebrow, título, frase y acción                         |
| `devfest2026/common/Eyebrow.astro`        | Etiqueta con subrayado de cuatro colores                |
| `devfest2026/common/Numeral.astro`        | Número grande con degradado y texto accesible           |
| `devfest2026/common/Chip.astro`           | Etiqueta pequeña: `chip` u `outline`                    |
| `devfest2026/common/ImageSlot.astro`      | Reserva de espacio hasta tener el asset final           |
| `devfest2026/common/Sticker.astro`        | Sello de cada actividad: `locked` o `earned`            |

Los íconos usan Font Awesome, como el resto del sitio: `<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>`.

## Reglas

- **Diseño:** seguimos `DESIGN.md`, y manda sobre el mockup. No copies del mockup las píldoras, los títulos en bold, los radios de más de 12px ni el salto al hover: botones y cards con 8px, paneles con 12px, títulos en peso medio, bordes de 1px y hover con cambio de tono.
- **Excepciones del tema:** `DESIGN.md` permite motivos propios en un tema de evento. Aquí son solo el degradado de `Numeral` y la sombra dura y el trazo grueso de los stickers.
- **Variables:** todo sale de `src/styles/devfest2026.css` y de los colores `gdg-*` de `global.css`. Nada de valores sueltos.
  - Color: `text-df-ink`, `bg-df-ground`, `bg-gdg-pastel-blue`
  - Texto: `text-df-headline`, `text-df-title`, `text-df-label`
  - Espacio: `gap-df-md`, `p-df-lg`, `py-df-section`
  - Forma: `rounded-df-card`, `rounded-df-panel`, `max-w-df`
  - Sombra: `shadow-xs` en botones, `shadow-sm` en hover de cards, `shadow-df-sticker` solo en stickers
- **Tonos:** `SectionShell` recibe `tone` y ajusta tinta y línea. Dentro de una sección usa `text-df-ink-*`, nunca blanco o gris fijo.
- **Datos:** fecha, precio y enlaces viven en `EVENT`, y los nombres de actividades en `ACTIVITY_NAMES` (`data.ts`).
- **Responsive:** una sola página que se adapta de móvil a escritorio.
- **Interactividad:** `<script>` de Astro con TypeScript, como el resto del sitio. El proyecto no tiene framework de UI, así que `client:visible` no aplica. Los minijuegos se cargan con `import()` al abrirlos.
- **Mockup:** es estático y trae estilos inline. Tradúcelos a variables y utilidades, no los copies.

## Estructura

```
src/pages/devfest-2026.astro        orden de las secciones
src/pages/devfest-2026/base.astro   catálogo de componentes base
src/styles/devfest2026.css          variables y tonos
src/components/devfest2026/
  data.ts                           EVENT y ACTIVITY_NAMES
  common/                           componentes base y ComponentPlaceholder
  header/  hero/  about/            Header, Hero, About
  passport/                         PassportSection
  agenda/  speakers/  fair/         Agenda, Speakers, Fair
  ticket/  faq/  location/          Ticket, FAQ, Location
  closing/  mobile-bar/             Closing, MobileBar
```
