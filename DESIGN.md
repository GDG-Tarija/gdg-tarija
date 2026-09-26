---
name: GDG Tarija
description: Sitio oficial de Google Developer Group Tarija, vitrina y puerta de entrada de la comunidad.
colors:
  gdg-blue: '#4285f4'
  gdg-blue-deep: '#3367d6'
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
    fontSize: '2.625rem'
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: '-0.03em'
  headline:
    fontFamily: 'Google Sans, sans-serif'
    fontSize: '1.875rem'
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: '-0.02em'
  lead:
    fontFamily: 'Google Sans, sans-serif'
    fontSize: '1.125rem'
    fontWeight: 400
    lineHeight: 1.625
  title:
    fontFamily: 'Google Sans, sans-serif'
    fontSize: '1rem'
    fontWeight: 600
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
rounded:
  tag: '6px'
  control: '8px'
  card: '12px'
  panel: '16px'
  full: '9999px'
spacing:
  gutter-mobile: '16px'
  gutter: '32px'
  gap: '16px'
  gap-lg: '24px'
  section: '80px'
  section-lg: '112px'
components:
  button-primary:
    backgroundColor: '{colors.gdg-blue}'
    textColor: '{colors.surface}'
    typography: '{typography.label}'
    rounded: '{rounded.full}'
    padding: '12px 28px'
  button-primary-hover:
    backgroundColor: '{colors.gdg-blue-deep}'
    textColor: '{colors.surface}'
  button-outline:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.full}'
    padding: '12px 28px'
  button-inverse:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.gdg-blue-deep}'
    rounded: '{rounded.full}'
    padding: '12px 28px'
  button-secondary:
    backgroundColor: '{colors.hairline}'
    textColor: '{colors.ink}'
    rounded: '{rounded.full}'
    padding: '12px 28px'
  card:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.card}'
    padding: '24px'
  panel-tonal:
    backgroundColor: '{colors.gdg-off-white}'
    textColor: '{colors.ink}'
    rounded: '{rounded.panel}'
    padding: '48px'
  cta-block:
    backgroundColor: '{colors.gdg-blue-deep}'
    textColor: '{colors.surface}'
    rounded: '{rounded.panel}'
    padding: '64px'
  nav-bar:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.card}'
    padding: '8px 32px'
  chip-filter:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.control}'
    height: '36px'
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

La referencia visual son las landings de **Google for Developers**: superficies claras y planas, Google Sans, botones en píldora, esquinas contenidas (12px), bordes finos, grillas rectas y fotos sin marco. El tono es adulto y técnico: una comunidad de developers, no un espacio infantil. Los componentes responden con cambios breves de tono o un lift de 2px, y el texto es corto: un título claro, una frase de apoyo y una acción.

**Temas de evento.** Los eventos insignia (hoy Build with AI 2026) pueden llevar un tema propio que hereda la tipografía, los logos y los cuatro colores de Google, pero puede cambiar el fondo (incluido un modo totalmente oscuro), sumar motivos gráficos propios, usar otra geometría de botones y usar degradados y glows. Esas libertades valen solo dentro de la landing del evento; nunca vuelven al sitio principal.

**Key Characteristics:**

- Claro por defecto; el cierre es un bloque azul con las caras del equipo, no una banda oscura.
- Los colores de Google como señales pequeñas (puntos, acciones), no como fondos.
- Google Sans en todo; jerarquía por peso y tamaño.
- Botones en píldora; cards y fotos con 12px; paneles grandes (hero, Nosotros, CTA) con 16px.
- Grillas rectas y alineadas; nada flota ni se inclina. La vida viene de las fotos reales y de la interacción (pestañas, perfiles), no de la decoración.
- Texto corto y directo; fotos reales como protagonistas.

## Colors

Una base neutra clara con los cuatro colores de Google como señales y una familia extendida para codificar comisiones.

### Primary

- **Azul Google** (`gdg-blue`): el color de la acción. Botones primarios, enlaces con flecha y el acento de cualquier llamada a la acción.
- **Azul Google Profundo** (`gdg-blue-deep`): hover del azul primario y fondo del bloque CTA de cierre (el blanco sobre este azul pasa 4.5:1; sobre `gdg-blue` no).

### Secondary

- **Rojo Google** (`gdg-red`), **Amarillo Google** (`gdg-yellow`) y **Verde Google** (`gdg-green`): señales puntuales. Hoy son los íconos de las pestañas de Nosotros (en color solo la activa) y los colores de comisión. Juntos forman la firma de marca en piezas pequeñas (el anillo del loader), nunca como cuatro bloques de fondo compitiendo.

### Tertiary

- **Colores de comisión**: completan el mapa de comisiones del equipo junto a los cuatro de Google. **Naranja Atardecer** (`gdg-sunset-orange`) para Logística, **Púrpura** (`gdg-accent-purple`) para Transmisión, **Rosa Halftone** (`gdg-halftone-red`) para Decoración y **Celeste Halftone** (`gdg-halftone-blue`) para Staff.
- **Azul Hielo** (`gdg-ice-blue`): fondo tonal del chip de filtro seleccionado, de la etiqueta "Conferencia" y hover del botón inverso. **Pastel Verde** y **Pastel Amarillo** (`gdg-pastel-green`, `gdg-pastel-yellow`, en `@theme`) tiñen las etiquetas "Taller" y "Hackathon".
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

**The Blue Means Go Rule.** En el sitio principal, la acción principal siempre es Azul Google. Ningún otro color compite por ese rol.

**The No-Gradient Rule.** El sitio principal no usa degradados en fondos, contenedores ni texto. El color es plano; los degradados y glows son un recurso exclusivo de los temas de evento.

**The Token-Only Rule.** Todo color sale de `@theme` en `src/styles/global.css`. Nada de hex sueltos en clases (`bg-[#3367D6]`) ni de nombres que no existen (`text-google-blue` no está definido y no pinta nada).

## Typography

**Display Font:** Google Sans (con `sans-serif`)
**Body Font:** Google Sans (con `sans-serif`)
**Label/Mono Font:** solo en temas de evento, la pila monoespaciada por defecto de Tailwind (`font-mono`)

**Character:** Una sola familia, la de Google, cargada en local desde `src/assets/fonts/google-sans/` (400, 500, 700 y sus itálicas). La jerarquía se hace con peso, tamaño y un tracking negativo leve en los títulos grandes.

### Hierarchy

- **Display** (700, de `clamp(2.25rem, 10.5vw, 2.625rem)` en móvil a 3.875rem en `xl`, 1.04, -0.03em): el `h1` del hero y el título del cierre. Uno por bloque.
- **Headline** (700, de 1.875rem a 2.5rem desde `md`, 1.25, -0.02em): títulos de sección ("¿Quiénes somos?", "Eventos pasados", "Equipo").
- **Lead** (400, 1.125rem a 1.25rem, 1.625, `ink-body`): la frase de apoyo bajo un título. Máximo unas dos líneas en escritorio.
- **Title** (600, 1rem, 1.375): nombres de eventos y de personas.
- **Body** (400, 1rem, 1.625): párrafos, con medida de 65–75 caracteres.
- **Label** (500, 0.875rem): navegación, filtros, metadatos. Las etiquetas de comisión bajan a 0.75rem.

### Named Rules

**The Short Copy Rule.** Un título, una frase y una acción. No se listan tipos de eventos, cifras ni audiencias segmentadas en los textos principales; se dice "developers".

**The One Family Rule.** El sitio principal usa solo Google Sans. La monoespaciada y los motivos de código (`//`, `{}`) pertenecen al tema de Build with AI.

## Layout

Columna centrada de 72rem (`max-w-6xl`) con márgenes de 16px en móvil y 32px desde `md`, la misma medida que la barra de navegación, para que el borde del logo y el borde del contenido coincidan. Todas las secciones del home se arman con `src/components/common/Section.astro`: 80px de padding vertical, 112px desde `md`, y `scroll-mt` para compensar la navegación fija.

Los encabezados de sección (`SectionHeading.astro`) van alineados a la izquierda, con la acción secundaria (un enlace con flecha) a la derecha en escritorio. Los bloques de título más texto usan una grilla de 12 columnas: título en 6 columnas y lead más botones en las otras 6, alineados abajo.

El ritmo alterna `gdg-off-white` y `surface`: hero (tablón), Nosotros (superficie), Eventos (tablón), Equipo (superficie) y el bloque CTA azul dentro de una sección blanca con `flushTop`, que continúa a Equipo sin doble padding. Eventos usa 2 columnas en móvil y 4 desde `lg`; Equipo, 2 en móvil y 4 desde `md`, así las 8 personas iniciales siempre llenan dos filas. El footer se apila hasta `lg`. Las listas largas muestran dos filas de escritorio (8 eventos, 8 personas) y el resto detrás de un botón "Ver todos".

**The Light Ground Rule.** Una sección nueva del sitio principal es clara. El único bloque de color fuerte es el CTA de cierre.

## Elevation & Depth

Sistema plano. La profundidad viene del contraste entre `surface` y `gdg-off-white` y de bordes de 1px. Las cards no tienen sombra en reposo; al abrirse o al hover cambian el borde o suman `shadow-sm`. Los botones llevan `shadow-sm` y suben a `shadow-md` con un lift de 2px al hover. Solo el menú móvil desplegado usa una sombra grande, porque de verdad flota sobre la página.

### Shadow Vocabulary

- **Control** (`shadow-sm`): botones en reposo y cards abiertas.
- **Hover** (`shadow-md`): botones al hover.
- **Overlay** (`shadow-xl`): solo el menú móvil desplegado.
- **Glow de evento** (`0 0 20px rgba(66,133,244,0.35)`, hasta `0 8px 28px rgba(66,133,244,0.35)` al hover): exclusivo del tema de evento.

### Named Rules

**The Quiet Shadow Rule.** Nada en el sitio principal pasa de `shadow-md` salvo que flote sobre la página. Fotos y cards no llevan sombra decorativa.

## Shapes

Esquinas contenidas, como en las páginas de Google. Radios del sitio principal: píldora completa (`rounded-full`) para botones, avatares y portadas de eventos (que se diseñaron para verse en círculo); 16px (`rounded-2xl`) para los paneles grandes: la foto del hero, el panel de Nosotros y el bloque CTA; 12px (`rounded-xl`) para cards, fotos de galería, la barra de navegación y el menú móvil; 8px (`rounded-lg`) para chips de filtro y los íconos de pestaña; 6px (`rounded-md`) para etiquetas. Los bordes son siempre de 1px.

Las fotos van en grillas rectas: sin marco, sin inclinación, sin superposición.

**The Pill-and-Card Rule.** Si ejecuta una acción, es una píldora. Si agrupa contenido, lleva 12px; si es un panel protagonista, 16px. Nada pasa de 16px salvo la píldora y los círculos.

## Components

### Buttons

Una píldora que cambia de tono y se levanta 2px al hover (`src/components/common/Button.astro`).

- **Shape:** píldora completa (`rounded-full`), texto sin cortes (`whitespace-nowrap`).
- **Primary:** fondo Azul Google, texto blanco, semibold. Tamaños `sm` (8px 20px), `md` (12px 28px) y `lg` (16px 32px).
- **Hover / Focus:** fondo Azul Google Profundo, lift de 2px y `shadow-md`; presionado baja a `scale(0.97)`. Foco visible solo con teclado: anillo azul de 2px con offset de 2px.
- **Outline:** fondo blanco con anillo interno de 1px gris; es el secundario sobre fondos grises ("Ver eventos", "Ver todos").
- **Inverse:** fondo blanco con texto Azul Google Profundo; solo sobre el bloque CTA azul. Hover en Azul Hielo.
- **Secondary:** fondo `hairline`, texto `ink`; solo sobre fondo blanco.
- **Icono:** el slot `icon` solo se renderiza si se pasa un ícono; la flecha a la derecha marca la acción principal.

### Links con flecha

`ArrowLink.astro`: texto semibold en Azul Google con una flecha que se desplaza 2px al hover. Si el enlace sale del sitio, la flecha es de "abrir afuera". Es la acción secundaria de los encabezados de sección.

### Chips

- **Filtro** (Equipo): 36px de alto, borde de 1px, 8px de radio, punto de color de la comisión y contador en `ink-muted`. Seleccionado: fondo Azul Hielo sin borde (`aria-pressed`).
- **Etiqueta de comisión:** fondo `hairline-soft`, 6px de radio, 0.75rem, con un punto de 6px del color de la comisión.

### Cards / Containers

- **Corner Style:** 12px (`rounded-xl`).
- **Background:** `surface`.
- **Shadow Strategy:** sin sombra en reposo (ver Elevation & Depth).
- **Border:** 1px `hairline`, que se oscurece al hover junto con `shadow-md` (las de eventos además suben 2px).
- **Internal Padding:** 16px en móvil, 24px desde `md`. Contenido centrado.

### Navigation

- **Style:** barra flotante centrada (`max-w-6xl`), blanco al 85% con desenfoque, borde `hairline`, esquinas de 12px, fija a 12–20px del borde superior.
- **Contenido:** logo, enlaces Nosotros, Eventos y Equipo (Label, `ink` a 70%, pasan a `ink-strong` al hover) y un botón primario `sm` "Únete".
- **Mobile:** botón de menú de 44px con `aria-expanded`; despliega un panel blanco de 12px con enlaces de 1.125rem y el botón "Únete a la comunidad". Se cierra al elegir un enlace, al hacer scroll o con Escape.

### Hero Photo

Una sola foto fija a la derecha del texto (4:3, 16px de radio): la foto grupal de Google I/O Extended Tarija 2024. Sin rotación, indicadores ni leyendas. Archivo: `src/assets/images/photos-comunity/io-extended-2024-grupal.jpg` (JPEG de 2000 px, recortado sin la mesa del primer plano); Astro genera las variantes WebP.

### Pestañas de Nosotros (signature)

Carrusel en forma de pestañas: a la izquierda la lista (vertical en escritorio, tres columnas en móvil) con un ícono de 40px que es gris en reposo y toma su color Google al activarse; a la derecha un panel tonal (`gdg-off-white`, 16px) con el título, el texto (sin ícono: el ícono vive solo en la pestaña) y un pie con "1 de 3" y flechas circulares. Los paneles se apilan en la misma celda para que el bloque no cambie de altura. Navegable con flechas del teclado (patrón de tabs de ARIA).

### Event Card

Card blanca centrada: portada circular (112px en móvil a 160px en escritorio) con zoom de 1.05 al hover, etiqueta del tipo teñida por formato (Taller verde, Conferencia azul, Hackathon amarillo), nombre en Title que pasa a azul y fecha con ícono de calendario al pie. Se genera en el build desde `public/events.json`, ordenado por fecha, con `src/utils/dates.ts` como parser.

### Member Card (signature)

Card vertical centrada: foto circular grande (96px a 128px, recortada a la cara con `src/utils/cloudinary.ts`), nombre, etiquetas de comisión y "Ver perfil +" al pie. El perfil se abre como una capa blanca dentro de la misma card (bio con scroll y redes como botones de ícono de 36px), así la grilla no se mueve; se cierra con la X o Escape y el foco vuelve al botón. El color de cada comisión sale de un único mapa en `src/components/main/members/commissions.ts`, que comparten etiquetas y filtros: Organizer azul, Developer verde, Diseño rojo, Marketing amarillo, Logística naranja, Transmisión púrpura, Decoración rosa y Staff celeste. En móvil, los filtros se desplazan en una sola fila.

### Closing CTA (signature)

Bloque Azul Google Profundo de 16px dentro de una sección blanca, con el contenido centrado: título Display en blanco, una frase, botón inverso y el correo como enlace con ícono. Los chevrons de GDG en blanco al 12% enmarcan el contenido a ambos lados ("< Únete a la comunidad >"); en móvil asoman cortados por los bordes. Sin fotos de personas.

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
- **Do** usar Azul Google para la acción principal y Azul Google Profundo para su hover.
- **Do** usar píldoras para botones, 12px para cards y fotos, y bordes de 1px.
- **Do** mostrar fotos reales en grillas rectas, alineadas al contenedor.
- **Do** escribir un título, una frase y una acción; decir "developers".
- **Do** tomar colores solo de los tokens de `@theme`, y los colores de comisión solo de `commissions.ts`.
- **Do** mantener un foco visible con teclado en todo lo que se puede tocar.
- **Do** respetar los lockups oficiales de GDG y usar Google Sans desde los archivos locales.

### Don't:

- **Don't** usar utilería "family friendly": chinchetas, fotos inclinadas o flotantes, marcos tipo polaroid, leyendas con fechas sobre las fotos.
- **Don't** pasar de 12px de radio fuera de las píldoras.
- **Don't** usar degradados en fondos, contenedores o texto en el sitio principal.
- **Don't** pasar de `shadow-md` en elementos que no flotan sobre la página, ni escalar más de 1.03 al hover.
- **Don't** usar carruseles para contenido que cabe a la vista; muestra el texto completo.
- **Don't** usar hex sueltos en clases ni tokens inexistentes como `text-google-blue`.
- **Don't** llevar motivos de un tema de evento (monospace, `//`, auroras, glows, CTAs de 6px) al sitio principal.
- **Don't** agregar bandas oscuras al home.
- **Don't** recortar en cuadrado portadas pensadas para círculo, ni dejar items de grilla sin fondo ni borde.
