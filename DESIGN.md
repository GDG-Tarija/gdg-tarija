---
name: GDG Tarija
description: Sitio oficial de Google Developer Group Tarija, vitrina y puerta de entrada de la comunidad.
colors:
  gdg-blue: '#4285f4'
  gdg-blue-deep: '#3367d6'
  gdg-blue-press: '#2851b8'
  gdg-red: '#ea4335'
  gdg-yellow: '#f9ab00'
  gdg-green: '#34a853'
  gdg-sunset-orange: '#f46831'
  gdg-accent-purple: '#9334e6'
  gdg-halftone-red: '#ff7daf'
  gdg-halftone-blue: '#57caff'
  gdg-ice-blue: '#cae6ff'
  surface: '#ffffff'
  gdg-off-white: '#f0f0f0'
  hairline: '#e5e7eb'
  hairline-soft: '#f3f4f6'
  ink: '#1f2937'
  ink-strong: '#111827'
  ink-body: '#4b5563'
  ink-muted: '#6b7280'
  gdg-black: '#1e1e1e'
  bwai-background: '#0f1419'
  bwai-border: '#181e24'
typography:
  display:
    fontFamily: 'Google Sans, sans-serif'
    fontSize: '2.5rem'
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: '-0.02em'
  headline:
    fontFamily: 'Google Sans, sans-serif'
    fontSize: '1.75rem'
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: '-0.01em'
  lead:
    fontFamily: 'Google Sans, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.625
  title:
    fontFamily: 'Google Sans, sans-serif'
    fontSize: '1rem'
    fontWeight: 500
    lineHeight: 1.375
  body:
    fontFamily: 'Google Sans, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: 'Google Sans, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 500
    lineHeight: 1.43
  code:
    fontFamily: "ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace"
    fontSize: '0.8125rem'
    fontWeight: 400
    lineHeight: 1.9
rounded:
  tag: '4px'
  chip: '6px'
  control: '8px'
  panel: '12px'
  full: '9999px'
spacing:
  gutter-mobile: '16px'
  gutter: '32px'
  gap: '16px'
  gap-lg: '24px'
  section: '64px'
  section-lg: '96px'
components:
  button-primary:
    backgroundColor: '{colors.gdg-blue-deep}'
    textColor: '{colors.surface}'
    typography: '{typography.label}'
    rounded: '{rounded.control}'
    height: '40px'
    padding: '0 20px'
  button-primary-hover:
    backgroundColor: '{colors.gdg-blue-press}'
    textColor: '{colors.surface}'
  button-outline:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.gdg-blue-deep}'
    rounded: '{rounded.control}'
    height: '40px'
    padding: '0 20px'
  button-inverse:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.gdg-blue-deep}'
    rounded: '{rounded.control}'
    height: '40px'
    padding: '0 20px'
  button-secondary:
    backgroundColor: '{colors.hairline}'
    textColor: '{colors.ink}'
    rounded: '{rounded.control}'
    height: '40px'
    padding: '0 20px'
  card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.control}'
    padding: '20px'
  panel-tonal:
    backgroundColor: '{colors.gdg-off-white}'
    textColor: '{colors.ink}'
    rounded: '{rounded.panel}'
    padding: '40px'
  cta-block:
    backgroundColor: '{colors.gdg-blue-deep}'
    textColor: '{colors.surface}'
    rounded: '{rounded.panel}'
    padding: '56px 48px'
  nav-bar:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    height: '64px'
    padding: '0 32px'
  chip-filter:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.chip}'
    height: '32px'
    padding: '0 12px'
  chip-filter-selected:
    backgroundColor: '{colors.gdg-ice-blue}'
    textColor: '{colors.ink-strong}'
  tag-commission:
    backgroundColor: '{colors.hairline-soft}'
    textColor: '{colors.ink}'
    rounded: '{rounded.tag}'
    padding: '2px 8px'
  bwai-cta:
    backgroundColor: '{colors.gdg-blue}'
    textColor: '{colors.surface}'
    rounded: '{rounded.tag}'
    padding: '14px 24px'
---

# Design System: GDG Tarija

## Overview

**Creative North Star: "El Tablón de la Comunidad"**

El sitio es el tablón de una comunidad real de developers: personas con nombre y foto, eventos con fecha, fotos de salas llenas. La metáfora vive en el contenido y en cómo se usa el color, nunca en utilería: no hay chinchetas, fotos inclinadas ni marcos de polaroid. Los cuatro colores de Google funcionan como señales: marcan la acción, la comisión de una persona o la estructura de un bloque. El color nunca decora de forma pareja; señala.

La referencia visual son las landings de **Google for Developers**: superficies claras y planas, Google Sans en peso medio, botones compactos de 40px con esquinas de 8px, bordes finos, grillas rectas, fotos sin marco y un header plano de borde a borde. Sobrio como Google, pero no corporativo: la calidez la ponen las personas, las fotos y el código, no la forma de los componentes. El tono es adulto y técnico. Los componentes responden con un cambio de tono, nunca con un salto, y el texto es corto: un título claro, una frase de apoyo y una acción.

**Temas de evento.** Los eventos insignia (hoy Build with AI 2026) pueden llevar un tema propio que hereda la tipografía, los logos y los cuatro colores de Google, pero puede cambiar el fondo (incluido un modo totalmente oscuro), sumar motivos gráficos propios, usar otra geometría de botones y usar degradados y glows. Esas libertades valen solo dentro de la landing del evento; nunca vuelven al sitio principal.

**Key Characteristics:**

- Claro por defecto; el cierre es un bloque azul, no una banda oscura.
- Los colores de Google como señales pequeñas (puntos, acciones), no como fondos.
- Google Sans en peso medio para títulos (nunca bold); jerarquía por tamaño y espacio.
- Botones de 40px con 8px; cards y fotos con 8px; paneles (foto del hero, Nosotros, CTA) con 12px.
- Movimiento casi imperceptible: fundidos cortos de 8–12px, cambios de tono en hover, nada que salte, flote o siga al cursor salvo la linterna del código del hero.
- Texto corto y directo; fotos reales como protagonistas.

## Colors

Una base neutra clara con los cuatro colores de Google como señales y una familia extendida para codificar comisiones.

### Primary

- **Azul Google** (`gdg-blue`): el azul de marca para señales no textuales: puntos, anillos de foco, íconos y el resaltado del código. No lleva texto blanco encima (3.56:1) ni se usa como color de texto.
- **Azul Google Profundo** (`gdg-blue-deep`): el color de la acción. Fondo de botones primarios (blanco encima: 5.2:1), texto de enlaces y "Ver perfil", y fondo del bloque CTA de cierre.
- **Azul Presionado** (`gdg-blue-press`): hover y presionado de botones y enlaces azules.

### Secondary

- **Rojo Google** (`gdg-red`), **Amarillo Google** (`gdg-yellow`) y **Verde Google** (`gdg-green`): señales puntuales. Hoy son los íconos de las pestañas de Nosotros (en color solo la activa), los puntos de tipo de evento (Taller verde, Conferencia azul, Hackathon amarillo) y los colores de comisión. Juntos forman la firma de marca en piezas pequeñas (el anillo del loader), nunca como cuatro bloques de fondo compitiendo.

### Tertiary

- **Colores de comisión**: completan el mapa de comisiones del equipo junto a los cuatro de Google. **Naranja Atardecer** (`gdg-sunset-orange`) para Logística, **Púrpura** (`gdg-accent-purple`) para Transmisión, **Rosa Halftone** (`gdg-halftone-red`) para Decoración y **Celeste Halftone** (`gdg-halftone-blue`) para Staff.
- **Azul Hielo** (`gdg-ice-blue`): fondo tonal del chip de filtro seleccionado y hover del botón inverso y del outline (al 40%).
- En `@theme` quedan otros tonos de la paleta GDG (pastel, midnight, forest, halftone verde y amarillo) como reserva. Tómalos de ahí antes de inventar un color nuevo.

### Neutral

- **Blanco Superficie** (`surface`): secciones alternas, cards, navegación, footer.
- **Blanco Tablón** (`gdg-off-white`, alias `--color-background`): fondo del hero y de las secciones alternas.
- **Línea** (`hairline`) y **Línea Suave** (`hairline-soft`): bordes de 1px, divisores y fondo de las etiquetas de comisión.
- **Tinta Fuerte** (`ink-strong`): títulos. **Tinta** (`ink`): texto de controles y nombres. **Tinta Cuerpo** (`ink-body`): párrafos y leads. **Tinta Tenue** (`ink-muted`): fechas, contadores y metadatos.
- **Negro GDG** (`gdg-black`): negro de marca, reservado; el home ya no tiene bandas oscuras.

### Event Theme (Build with AI 2026)

- **Noche Build** (`bwai-background`): fondo de toda la landing del evento.
- **Borde Build** (`bwai-border`): bordes y divisores sobre Noche Build.
- Texto sobre Noche Build: blanco con opacidades escalonadas (100% títulos, 60–70% cuerpo, 35% notas).

### Named Rules

**The Signal Rule.** Un color de Google aparece solo donde señala algo: una acción, una comisión, un pilar. Si un acento no señala nada, sobra.

**The Blue Means Go Rule.** En el sitio principal, la acción principal siempre es azul (Azul Google Profundo, por contraste). Ningún otro color compite por ese rol.

**The No-Gradient Rule.** El sitio principal no usa degradados en fondos, contenedores ni texto. El color es plano; los degradados y glows son un recurso exclusivo de los temas de evento.

**The Token-Only Rule.** Todo color sale de `@theme` en `src/styles/global.css`. Nada de hex sueltos en clases (`bg-[#3367D6]`) ni de nombres que no existen (`text-google-blue` no está definido y no pinta nada).

## Typography

**Display Font:** Google Sans (con `sans-serif`)
**Body Font:** Google Sans (con `sans-serif`)
**Code Font:** pila monoespaciada del sistema (`ui-monospace, SFMono-Regular, Menlo, Consolas`), solo para código real: el fondo del hero y la línea de terminal del footer

**Character:** Una sola familia, la de Google, cargada en local desde `src/assets/fonts/google-sans/`. Como en las páginas de Google, los títulos van en peso medio (500), no en bold: la jerarquía la dan el tamaño y el espacio. El 700 queda reservado y hoy no se usa en el home.

### Hierarchy

- **Display** (500, de `clamp(2.125rem, 9.5vw, 2.5rem)` en móvil a 3.25rem en `xl`, 1.1, -0.02em): el `h1` del hero. Uno por página.
- **Headline** (500, de 1.75rem a 2.25rem desde `md`, 1.25, -0.01em): títulos de sección y del CTA de cierre.
- **Lead** (400, 1rem a 1.125rem, 1.625, `ink-body`): la frase de apoyo bajo un título. Máximo unas dos líneas en escritorio.
- **Title** (500, 0.875rem a 1rem, 1.375): nombres de eventos y de personas, y el título del panel de Nosotros (1.25rem).
- **Body** (400, 1rem, 1.625): párrafos, con medida de 65–75 caracteres.
- **Label** (500, 0.875rem): navegación, filtros, metadatos. Las etiquetas de comisión bajan a 0.75rem.

### Named Rules

**The Short Copy Rule.** Un título, una frase y una acción. No se listan tipos de eventos, cifras ni audiencias segmentadas en los textos principales; se dice "developers".

**The One Family Rule.** El sitio principal usa Google Sans. La monoespaciada solo aparece como código real: el fondo del hero y la línea de terminal del footer.

## Layout

Columna centrada de 72rem (`max-w-6xl`) con márgenes de 16px en móvil y 32px desde `md`, la misma medida que la barra de navegación, para que el borde del logo y el borde del contenido coincidan. Todas las secciones del home se arman con `src/components/common/Section.astro`: 64px de padding vertical, 96px desde `md`. El offset de las anclas lo resuelve `scroll-padding-top: 5rem` en `html`, para que la barra fija de 64px nunca tape un título ni un elemento enfocado.

Los encabezados de sección (`SectionHeading.astro`) van alineados a la izquierda, con la acción secundaria (un enlace con flecha) a la derecha en escritorio. Los bloques de título más texto usan una grilla de 12 columnas: título en 6 columnas y lead más botones en las otras 6, alineados abajo.

El ritmo alterna `gdg-off-white` y `surface`: hero (tablón), Nosotros (superficie), Eventos (tablón), Equipo (superficie) y el bloque CTA azul dentro de una sección blanca con `flushTop`, que continúa a Equipo sin doble padding. Eventos usa 2 columnas en móvil y 4 desde `lg`; Equipo, 2 en móvil y 4 desde `md`, así las 8 personas iniciales siempre llenan dos filas. El footer se apila hasta `lg`. Las listas largas muestran dos filas de escritorio (8 eventos, 8 personas) y el resto detrás de un botón "Ver todos".

**The Light Ground Rule.** Una sección nueva del sitio principal es clara. El único bloque de color fuerte es el CTA de cierre.

## Elevation & Depth

Sistema plano. La profundidad viene del contraste entre `surface` y `gdg-off-white` y de bordes de 1px. Las cards no tienen sombra en reposo; al hover oscurecen el borde y suman `shadow-sm`. El botón primario lleva `shadow-xs`. Nada se levanta al hover. El header gana un borde inferior al hacer scroll, no una sombra.

### Shadow Vocabulary

- **Botón** (`shadow-xs`): solo el botón primario.
- **Hover** (`shadow-sm`): cards de eventos y de equipo al hover.
- **Glow de evento** (`0 0 20px rgba(66,133,244,0.35)`, hasta `0 8px 28px rgba(66,133,244,0.35)` al hover): exclusivo del tema de evento.

### Named Rules

**The Quiet Shadow Rule.** Nada en el sitio principal pasa de `shadow-sm`. Fotos y cards no llevan sombra decorativa, y nada se levanta al hover.

## Shapes

Esquinas contenidas, como en las páginas de Google. Radios del sitio principal: 12px (`rounded-xl`) solo para los paneles protagonistas (la foto del hero, el panel de Nosotros y el bloque CTA); 8px (`rounded-lg`) para botones, cards, fotos de galería y pestañas; 6px (`rounded-md`) para chips de filtro y los íconos de pestaña; 4px (`rounded`) para etiquetas de comisión. El círculo queda solo para lo que es redondo por naturaleza: avatares, portadas de eventos (se diseñaron para verse en círculo) y los botones de ícono de flecha. El header no tiene radio: es una barra de borde a borde. Los bordes son siempre de 1px.

Las fotos van en grillas rectas: sin marco, sin inclinación, sin superposición.

**The Eight-Pixel Rule.** Botones y cards llevan 8px; los paneles protagonistas, 12px. Nada pasa de 12px salvo los círculos de avatares, portadas y botones de ícono. No hay píldoras en el sitio principal.

## Components

### Buttons

Compactos y sobrios, como los de Google: el hover cambia el tono, nada se mueve (`src/components/common/Button.astro`).

- **Shape:** 8px (`rounded-lg`), texto sin cortes (`whitespace-nowrap`).
- **Primary:** fondo Azul Google Profundo, texto blanco, peso medio, `shadow-xs`. Tamaños `sm` (36px, texto 14px), `md` (40px, texto 14px) y `lg` (48px, texto 16px).
- **Hover / Focus:** fondo Azul Presionado en 150ms; sin lift, sin escala. Foco visible solo con teclado: anillo azul de 2px con offset de 2px.
- **Outline:** fondo blanco, anillo interno de 1px gris y texto Azul Google Profundo; hover con Azul Hielo al 40%. Es el secundario ("Ver eventos", "Ver todos").
- **Inverse:** fondo blanco con texto Azul Google Profundo; solo sobre el bloque CTA azul. Hover en Azul Hielo.
- **Secondary:** fondo `hairline`, texto `ink`; solo sobre fondo blanco.
- **Icono:** el slot `icon` solo se renderiza si se pasa un ícono; la flecha a la derecha marca la acción principal.

### Links con flecha

`ArrowLink.astro`: texto de 14px en peso medio, Azul Google Profundo, con una flecha que se desplaza 2px al hover. Si el enlace sale del sitio, la flecha es de "abrir afuera". Es la acción secundaria de los encabezados de sección.

### Chips

- **Filtro** (Equipo): 32px de alto, borde de 1px, 6px de radio, punto de color de la comisión y contador de 12px. Seleccionado: fondo Azul Hielo sin borde (`aria-pressed`).
- **Etiqueta de comisión:** fondo `hairline-soft`, 4px de radio, 0.75rem, con un punto de 6px del color de la comisión.
- **Tipo de evento:** texto gris de 12px con un punto de color en la misma línea; sin fondo.

### Cards / Containers

- **Corner Style:** 8px (`rounded-lg`).
- **Background:** `surface`.
- **Shadow Strategy:** sin sombra en reposo; `shadow-sm` al hover (ver Elevation & Depth).
- **Border:** 1px `hairline`, que se oscurece al hover.
- **Internal Padding:** 16px en móvil, 20px desde `md`/`lg`. Contenido centrado.

### Navigation

- **Style:** barra plana de borde a borde, 64px de alto, fija arriba. En reposo toma el fondo del hero al 90% con desenfoque; al hacer scroll se vuelve blanca y gana un borde inferior `hairline`.
- **Contenido:** logo y, alineados a `max-w-6xl`, los enlaces Nosotros, Eventos y Equipo (14px, peso medio, `ink-body`) y un botón primario `sm` "Únete". La sección visible se marca con un subrayado de 2px Azul Google Profundo pegado al borde inferior de la barra, como las pestañas de Google.
- **Mobile:** botón de menú de 44px con `aria-expanded`; despliega un panel blanco a todo el ancho, debajo de la barra, con enlaces de 16px y el botón "Únete a la comunidad". Se cierra al elegir un enlace, al hacer scroll o con Escape.

### Hero Photo

Una sola foto fija a la derecha del texto (4:3, 12px de radio): la foto grupal de Google I/O Extended Tarija 2024. El texto y la foto entran con un único fundido de 0.6s y 8px. Archivo: `src/assets/images/photos-comunity/io-extended-2024-grupal.jpg`.

### Code Field (signature)

Fondo del hero (`src/components/main/hero/CodeField.astro`): siete columnas de código real del ecosistema Google (Flutter, Compose, Firebase, Gemini, Go, JS) que suben y bajan en loops de 70–110s, en gris al 26%. Una segunda capa idéntica con resaltado de sintaxis en los cuatro colores Google (keywords azul, strings verde, números rojo, funciones amarillo) solo se ve dentro de una "linterna" de 13rem que sigue al cursor con inercia; sin cursor (móvil) recorre el fondo sola. El campo se apaga detrás del bloque de texto para no competir con la lectura, se pausa fuera de pantalla y tiene un parallax leve de columnas opuestas al hacer scroll. Es el único lugar del sitio principal donde vive la monoespaciada.

### Pestañas de Nosotros (signature)

Carrusel en forma de pestañas: a la izquierda la lista (vertical en escritorio, tres columnas en móvil) con un ícono de 32px que es gris en reposo y toma su color Google al activarse; a la derecha un panel tonal (`gdg-off-white`, 12px) con el título, el texto (sin ícono: el ícono vive solo en la pestaña) y un pie con "1 de 3" y flechas circulares. Los paneles se apilan en la misma celda para que el bloque no cambie de altura. Navegable con flechas del teclado (patrón de tabs de ARIA).

### Event Card

Card blanca de 8px centrada: portada circular (96px en móvil a 128px en escritorio) con zoom de 1.03 al hover, tipo del evento con un punto de color (Taller verde, Conferencia azul, Hackathon amarillo), nombre en Title que pasa a azul y fecha con ícono de calendario al pie. Se genera en el build desde `public/events.json`, ordenado por fecha, con `src/utils/dates.ts` como parser.

### Member Card (signature)

Card vertical de 8px centrada: foto circular (80px a 112px, recortada a la cara con `src/utils/cloudinary.ts`), nombre, etiquetas de comisión y "Ver perfil +" al pie. El perfil se abre como una capa blanca dentro de la misma card (bio con scroll y redes como botones de ícono de 36px), así la grilla no se mueve; se cierra con la X o Escape y el foco vuelve al botón. El color de cada comisión sale de un único mapa en `src/components/main/members/commissions.ts`, que comparten etiquetas y filtros: Organizer azul, Developer verde, Diseño rojo, Marketing amarillo, Logística naranja, Transmisión púrpura, Decoración rosa y Staff celeste. Al hover, la foto toma un anillo fino del color de la comisión principal, sin moverse. En móvil, los filtros se desplazan en una sola fila.

### Closing CTA (signature)

Bloque Azul Google Profundo de 12px dentro de una sección blanca, con el contenido centrado: título Headline en blanco, una frase, botón inverso y el correo. Los chevrons de GDG en blanco al 10% enmarcan el contenido ("< Únete a la comunidad >") como textura quieta: no se animan.

### Footer terminal

Bajo el footer, una línea monoespaciada `$ git commit -m "hecho en Tarija, por developers de Tarija"`, estática, con un cursor gris que parpadea: el único movimiento es el natural de una terminal.

### Motion

Casi imperceptible, como en las páginas de Google: el movimiento confirma, no actúa.

- **Scroll reveals** (`src/scripts/reveal.ts`, Motion `inView` + `animate`): `[data-reveal]` sube 12px y aparece en 0.5s; `[data-reveal-group]` sube 10px en cascada con sus hijos (desfase total ≤ 0.25s). Solo se ocultan elementos bajo el pliegue, así nada parpadea al cargar.
- **Acciones:** las cards que aparecen por un filtro o por "Ver todos" entran en 0.35s desde 8px (`revealItems`).
- **Estado:** en Nosotros el fondo de la pestaña activa se desliza entre pestañas en 0.3s; la barra se vuelve blanca con borde al hacer scroll y subraya la sección visible; hover = cambio de tono o de borde en 150ms.
- **Curva:** ease-out-quart, `cubic-bezier(0.25, 1, 0.5, 1)`, en todas las llegadas. Sin rebotes, sin elásticos, sin elementos que floten o sigan al cursor (la linterna del código del hero es la única excepción).
- **Reduced motion:** sin loops, sin reveals espaciales ni tipeo; los estados siguen funcionando.

### Loader

Anillo que gira con un color de Google por lado alrededor del logo de GDG Tarija sobre blanco, con título y subtítulo. Lo usan todas las rutas de redirección.

### Event Theme: Build with AI 2026

- Fondo Noche Build en toda la página, texto blanco con opacidades escalonadas.
- Motivos de código: comentarios `//` en azul o verde, llaves `{}` en monospace como íconos de sección, skyline de Tarija en SVG.
- Auroras: cuatro manchas difusas (azul, verde, rojo, amarillo, 8–18% de opacidad, `blur(100px)`) que se desplazan lentamente detrás del hero.
- CTA: rectángulo de 6px en Azul Google con glow azul, flecha que se desplaza al hover.
- Contador regresivo con dígitos tabulares y separadores `:` que pulsan en azul, verde y amarillo.

## Do's and Don'ts

### Do:

- **Do** armar cada sección nueva con `Section.astro` y `SectionHeading.astro`, sobre fondo claro.
- **Do** usar Azul Google Profundo para acciones y texto azul, y Azul Presionado para su hover; texto y metadatos siempre ≥ 4.5:1.
- **Do** usar 8px para botones, cards y fotos, 12px para paneles protagonistas y bordes de 1px.
- **Do** escribir títulos en peso medio (500); la jerarquía la dan el tamaño y el espacio.
- **Do** mostrar fotos reales en grillas rectas, alineadas al contenedor.
- **Do** escribir un título, una frase y una acción; decir "developers".
- **Do** tomar colores solo de los tokens de `@theme`, y los colores de comisión solo de `commissions.ts`.
- **Do** mantener un foco visible con teclado en todo lo que se puede tocar.
- **Do** respetar los lockups oficiales de GDG y usar Google Sans desde los archivos locales.

### Don't:

- **Don't** usar utilería "family friendly": chinchetas, fotos inclinadas o flotantes, marcos tipo polaroid, leyendas con fechas sobre las fotos.
- **Don't** usar píldoras ni pasar de 12px de radio fuera de avatares, portadas y botones de ícono.
- **Don't** usar bold (700) en títulos, ni botones de más de 48px de alto.
- **Don't** usar degradados en fondos, contenedores o texto en el sitio principal.
- **Don't** pasar de `shadow-sm`, levantar elementos al hover ni escalar más de 1.03.
- **Don't** animar títulos palabra por palabra, revelar fotos con máscaras ni hacer flotar o seguir al cursor elementos decorativos.
- **Don't** usar carruseles para contenido que cabe a la vista; muestra el texto completo.
- **Don't** usar hex sueltos en clases ni tokens inexistentes como `text-google-blue`.
- **Don't** llevar motivos de un tema de evento (auroras, glows, CTAs de 6px) al sitio principal; la monoespaciada solo como código real.
- **Don't** agregar bandas oscuras al home.
- **Don't** recortar en cuadrado portadas pensadas para círculo, ni dejar items de grilla sin fondo ni borde.
