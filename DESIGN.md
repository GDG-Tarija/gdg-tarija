---
name: GDG Tarija
description: Sitio oficial de Google Developer Group Tarija, vitrina y puerta de entrada de la comunidad.
colors:
  gdg-blue: '#4285f4'
  gdg-blue-deep: '#3367d6'
  gdg-red: '#ea4335'
  gdg-yellow: '#f9ab00'
  gdg-green: '#34a853'
  gdg-halftone-blue: '#57caff'
  gdg-halftone-green: '#5cdb6d'
  gdg-halftone-yellow: '#ffd427'
  gdg-halftone-red: '#ff7daf'
  gdg-pastel-blue: '#c3ecf6'
  gdg-pastel-green: '#ccf6c5'
  gdg-pastel-red: '#f8d8d8'
  gdg-ice-blue: '#cae6ff'
  gdg-midnight-blue: '#165185'
  gdg-deep-ocean-blue: '#2480f0'
  surface: '#ffffff'
  gdg-off-white: '#f0f0f0'
  hairline: '#e5e7eb'
  hairline-soft: '#f3f4f6'
  ink: '#1f2937'
  ink-strong: '#111827'
  ink-muted: '#6b7280'
  gdg-black: '#1e1e1e'
  band-dark: '#262626'
  bwai-background: '#0f1419'
  bwai-border: '#181e24'
typography:
  display:
    fontFamily: 'Google Sans, sans-serif'
    fontSize: '3rem'
    fontWeight: 700
    lineHeight: 1
  headline:
    fontFamily: 'Google Sans, sans-serif'
    fontSize: '1.875rem'
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: 'Google Sans, sans-serif'
    fontSize: '1.5rem'
    fontWeight: 700
    lineHeight: 1.333
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
  md: '6px'
  lg: '16px'
  card: '24px'
  full: '9999px'
spacing:
  gutter-mobile: '16px'
  gutter: '24px'
  gap: '24px'
  gap-lg: '32px'
  section: '64px'
  section-lg: '80px'
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
  link-row:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.lg}'
    padding: '16px 24px'
  nav-bar:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.ink}'
    rounded: '{rounded.lg}'
    padding: '8px 32px'
  chip-commission:
    rounded: '{rounded.full}'
    padding: '2px 10px'
  bwai-cta:
    backgroundColor: '{colors.gdg-blue}'
    textColor: '{colors.surface}'
    rounded: '{rounded.md}'
    padding: '14px 24px'
---

# Design System: GDG Tarija

## Overview

**Creative North Star: "El Tablón de la Comunidad"**

El sitio es un tablón de anuncios vivo de una comunidad real: personas con nombre y foto, eventos con fecha, fotos de salas llenas. El fondo es claro y tranquilo, como papel de tablón. Los cuatro colores de Google funcionan como chinchetas: marcan qué es importante, quién pertenece a qué comisión y dónde hay que tocar. El color nunca decora de forma pareja; señala.

La referencia de tacto son las landings de **Google for Developers**: superficies blancas, Google Sans, botones en píldora, cards de esquinas amplias, sombras apenas perceptibles y respuestas pequeñas pero claras al pasar el dedo o el cursor. Los componentes son amables y táctiles: invitan a tocar desde el celular, responden con un leve lift y nunca gritan. La marca de Google Developer Groups se aplica con disciplina (lockups oficiales, colores oficiales, Google Sans), y la identidad local vive en el contenido: el equipo, las fotos y el historial de eventos de Tarija.

**Temas de evento.** Los eventos insignia (hoy Build with AI 2026) pueden llevar un tema propio que hereda la tipografía, los logos y los cuatro colores de Google, pero puede cambiar el fondo (incluido un modo totalmente oscuro), sumar motivos gráficos propios, usar otra geometría de botones y usar degradados y glows. Esas libertades valen solo dentro de la landing del evento; nunca vuelven al sitio principal.

**Key Characteristics:**

- Claro por defecto; las bandas oscuras son excepciones puntuales.
- Los cuatro colores de Google como acentos que señalan, no como fondos.
- Google Sans en todo; jerarquía por peso y tamaño, sin segunda familia en el sitio principal.
- Botones en píldora, cards con esquinas de 24px, sombras sutiles.
- Interacciones táctiles y breves: lift pequeño, cambio de tono, nada de rebotes exagerados.
- Personas y fotos reales como protagonistas visuales.

## Colors

Una base neutra clara con los cuatro colores de Google como acentos y una familia extendida (halftone, pastel) para codificar comisiones y estados.

### Primary

- **Azul Google** (`gdg-blue`): el color de la acción. Botones primarios, enlaces destacados, fechas de eventos y el acento principal de cualquier llamada a la acción.
- **Azul Google Profundo** (`gdg-blue-deep`): hover y estado presionado del azul primario. Es el mismo tono que ya usan los CTA de Build with AI.

### Secondary

- **Rojo Google** (`gdg-red`): hover de enlaces de navegación y acentos puntuales. No se usa para errores decorativos ni fondos grandes.
- **Amarillo Google** (`gdg-yellow`): acento de apoyo en contadores, separadores y detalles gráficos.
- **Verde Google** (`gdg-green`): acento de apoyo; confirmaciones y detalles gráficos.

Juntos, los cuatro aparecen como firma de marca en piezas pequeñas (el anillo del loader, los separadores del contador, los indicadores del carrusel), nunca como cuatro bloques de fondo compitiendo.

### Tertiary

- **Familia Halftone** (`gdg-halftone-blue`, `gdg-halftone-green`, `gdg-halftone-yellow`, `gdg-halftone-red`): versiones luminosas para texto y bordes sobre superficies oscuras. Codifican las comisiones del equipo.
- **Familia Pastel** (`gdg-pastel-blue`, `gdg-pastel-green`, `gdg-pastel-red`, `gdg-ice-blue`): tintes suaves para chips, fondos de etiquetas y superficies de apoyo en modo claro.
- **Azul Medianoche** (`gdg-midnight-blue`) y **Azul Océano** (`gdg-deep-ocean-blue`): azules de profundidad para piezas de marca y bordes sobre blanco.
- En `@theme` también existen `gdg-sunset-orange`, `gdg-forest-green`, `gdg-pastel-yellow` y `gdg-accent-purple` como reserva de la paleta GDG. Hoy no se usan; tómalos de ahí antes de inventar un color nuevo.

### Neutral

- **Blanco Superficie** (`surface`): fondo de cards, barra de navegación y secciones informativas.
- **Blanco Tablón** (`gdg-off-white`, alias `--color-background`): fondo base de página y superficies hundidas.
- **Línea** (`hairline`) y **Línea Suave** (`hairline-soft`): bordes de 1px en navegación, cards y separadores.
- **Tinta** (`ink`): texto principal. **Tinta Fuerte** (`ink-strong`): títulos de mayor peso. **Tinta Tenue** (`ink-muted`): fechas, metadatos y texto secundario.
- **Negro GDG** (`gdg-black`): negro de marca para piezas oscuras.
- **Banda Oscura** (`band-dark`): fondo de las bandas oscuras actuales del home (Quiénes somos, Fotos, Miembros).

### Event Theme (Build with AI 2026)

- **Noche Build** (`bwai-background`): fondo de toda la landing del evento.
- **Borde Build** (`bwai-border`): bordes y divisores sobre Noche Build.
- Texto sobre Noche Build: blanco con opacidades escalonadas (100% títulos, 60–70% cuerpo, 35% notas).

### Named Rules

**The Pushpin Rule.** Los colores de Google son chinchetas: van donde hay algo que señalar (una acción, una comisión, una fecha). Si un acento no señala nada, sobra.

**The Blue Means Go Rule.** En el sitio principal, la acción principal siempre es Azul Google. Ningún otro color compite por ese rol.

**The No-Gradient Rule.** El sitio principal no usa degradados en fondos de cards, contenedores ni texto. El color es plano; los degradados y glows son un recurso exclusivo de los temas de evento.

**The Token-Only Rule.** Todo color sale de `@theme` en `src/styles/global.css`. Nada de hex sueltos en clases (`bg-[#3367D6]`) ni de nombres que no existen (`text-google-blue` no está definido y no pinta nada).

## Typography

**Display Font:** Google Sans (con `sans-serif`)
**Body Font:** Google Sans (con `sans-serif`)
**Label/Mono Font:** solo en temas de evento, la pila monoespaciada por defecto de Tailwind (`font-mono`)

**Character:** Una sola familia, la de Google, cargada en local desde `src/assets/fonts/google-sans/` (400, 500, 700 y sus itálicas). La jerarquía se hace con peso y tamaño; la voz es amable y clara, nunca técnica en el sitio principal.

### Hierarchy

- **Display** (700, de 3rem en móvil hasta 7.5rem en pantallas grandes, line-height 1): títulos de campaña de primera pantalla, como "Call 4 Members". Uno por página como máximo.
- **Headline** (700, 1.875rem, 1.2): títulos de sección ("Eventos Pasados", "Miembros", "Fotos de nuestros eventos").
- **Title** (700, 1.5rem y hasta 2.25rem en escritorio, 1.333): títulos de bloque, como los slides de Quiénes somos, Misión y Visión.
- **Body** (400, 1rem, 1.625): párrafos. Los textos largos se limitan a unos 65–75 caracteres por línea (`max-w-4xl` como techo).
- **Label** (500, 0.875rem): navegación, tabs, chips y metadatos. Los chips más pequeños bajan a 0.75rem.

### Named Rules

**The One Family Rule.** El sitio principal usa solo Google Sans. La monoespaciada y los motivos de código (`//`, `{}`) pertenecen al tema de Build with AI y no se importan al home.

## Layout

Columna centrada con contenedores de ancho máximo según el tipo de contenido: 72rem (`max-w-6xl`) para navegación y secciones de texto, 80rem (`max-w-7xl`) para grillas de eventos y landings de evento, 64rem (`max-w-5xl`) para la grilla de miembros. Los márgenes laterales son 16px en móvil y 24px desde tablet.

Las secciones respiran con 64px de padding vertical y suben a 80px desde `md`. Las grillas son de una columna en móvil, dos en `sm`, tres en `md` y cuatro en `lg`, con separación de 24–32px. La barra de navegación flota fija arriba, así que las anclas llevan `scroll-mt-24` / `md:scroll-mt-28`.

El ritmo por defecto es claro: `gdg-off-white` y `surface` alternan para separar secciones. Las bandas oscuras son excepciones deliberadas; el home actual tiene tres (Quiénes somos, Fotos, Miembros), que ya son el techo y no un patrón a repetir.

**The Light Ground Rule.** Una sección nueva del sitio principal es clara salvo que haya una razón editorial para oscurecerla. No se agregan bandas oscuras nuevas para "dar variedad".

## Elevation & Depth

Sistema casi plano. La profundidad viene del contraste entre `surface` y `gdg-off-white`, de bordes de 1px (`hairline`, `hairline-soft`) y de sombras muy suaves. En reposo, las cards y filas usan `shadow-sm`; al hover suben a `shadow-md` con un lift de 2px. Los overlays (menú móvil, modal de fotos) son los únicos que usan sombras grandes, porque de verdad flotan sobre la página.

### Shadow Vocabulary

- **Reposo** (`shadow-sm`): cards, filas de enlaces y botones en reposo.
- **Hover** (`shadow-md`): respuesta al hover de cualquier elemento que se puede tocar.
- **Overlay** (`shadow-xl` / `shadow-2xl`): solo menú móvil desplegado y modal de fotos.
- **Glow de evento** (`0 0 20px rgba(66,133,244,0.35)`, hasta `0 8px 28px rgba(66,133,244,0.35)` al hover): exclusivo del tema de evento.

### Named Rules

**The Quiet Shadow Rule.** Nada en el sitio principal pasa de `shadow-md` salvo que flote sobre la página. Los botones con `shadow-lg` y `hover:shadow-xl` actuales son una desviación a corregir.

## Shapes

Formas amplias y suaves, como en las landings de Google for Developers. Tres radios en el sitio principal: píldora completa (`rounded-full`) para botones, chips, tabs y avatares; 24px (`rounded-3xl`) para cards; 16px (`rounded-2xl`) para la barra de navegación, el menú desplegable y los elementos internos. Los avatares de personas y las portadas de eventos son círculos. Los bordes son de 1px, nunca más gruesos salvo en avatares (2px).

El tema de Build with AI usa esquinas de 6px (`rounded-md`) en CTAs y paneles, coherente con su estética de terminal.

**The Pill-and-Card Rule.** Si se toca y ejecuta una acción, es una píldora. Si agrupa contenido, es una card de 24px. No hay botones cuadrados ni cards con esquinas chicas en el sitio principal.

## Components

### Buttons

Amables y táctiles: una píldora azul que se levanta un poco al hover.

- **Shape:** píldora completa (`rounded-full`).
- **Primary:** fondo Azul Google, texto blanco, Label en semibold. Tamaños `sm` (8px 20px), `md` (12px 28px) y `lg` (16px 32px), definidos en `src/components/common/Button.astro`.
- **Hover / Focus:** fondo Azul Google Profundo, lift de 2px y `shadow-md`; presionado baja a `scale(0.97)`. Foco visible con anillo azul de 2px y offset de 2px.
- **Secondary:** fondo `hairline`, texto `ink`, mismo comportamiento.
- **Desviaciones actuales:** el hover usa `blue-600` de Tailwind en vez de Azul Google Profundo, la sombra en reposo es `shadow-lg` y el hover escala a 1.05. El CTA de Call 4 Members escala hasta 1.25 y usa degradado. Todo eso se alinea con esta sección cuando se toque el componente.

### Chips

- **Style:** píldora pequeña (Label 0.75rem, padding 2px 10px) con fondo oscuro teñido y texto en el color halftone o pastel de la comisión.
- **State:** los tabs de filtro de Miembros son píldoras con borde de 1px; el tab activo toma el color de su comisión en borde y texto.

### Cards / Containers

- **Corner Style:** 24px (`rounded-3xl`).
- **Background:** `surface` sobre `gdg-off-white`.
- **Shadow Strategy:** `shadow-sm` en reposo y `shadow-md` más lift de 2px al hover (ver Elevation & Depth).
- **Border:** 1px `hairline-soft`.
- **Internal Padding:** 24px.
- La fila de enlace de `/links` (card blanca, borde suave, texto que pasa a azul y flecha que se desplaza al hover) es la referencia más fiel de esta card hoy.

### Navigation

- **Style:** barra flotante centrada (`max-w-6xl`), blanco al 80% con desenfoque, borde `hairline`, esquinas de 16px, fija a 12–20px del borde superior.
- **Typography:** Label en medium, `ink` a 70%; hover en Rojo Google.
- **Mobile:** botón de menú que despliega un panel blanco de 16px de radio con enlaces grandes (1.25rem, bold) que entran en cascada de 80ms con `cubic-bezier(0.16, 1, 0.3, 1)`.
- Logo: versión compacta en móvil y horizontal desde `md`, ambas desde Cloudinary.

### Commission Badge (signature)

Cada comisión del equipo tiene un color fijo: Organizer en halftone azul, Developer en pastel azul, Diseño en rojo Google, Logística en halftone verde, Marketing en halftone amarillo, Staff en pastel verde, Transmisión en halftone rojo y Decoración en pastel rojo. El mismo mapa colorea los chips de la tarjeta de miembro y el tab activo del filtro. Es la aplicación más clara de The Pushpin Rule y debe mantenerse en un solo mapa compartido.

### Member Card (signature)

Tarjeta que gira al tocarla: el frente muestra foto circular, nombre y hasta dos chips de comisión; el reverso muestra la bio, todas las comisiones y las redes. Hoy usa un borde animado con los cuatro colores de Google y fondos degradados gris; por The No-Gradient Rule, esos degradados son deuda a revisar.

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

- **Do** usar el fondo claro (`gdg-off-white` / `surface`) como punto de partida de cualquier sección nueva del sitio principal.
- **Do** usar Azul Google para la acción principal y Azul Google Profundo para su hover.
- **Do** usar píldoras (`rounded-full`) para botones y chips, y cards de 24px (`rounded-3xl`) con `shadow-sm` para agrupar contenido.
- **Do** responder al hover con un lift de 2px y `shadow-md`, y al clic con `scale(0.97)`.
- **Do** tomar colores solo de los tokens de `@theme`; si falta uno, agregarlo ahí primero.
- **Do** usar fotos reales de la comunidad y del equipo como imagen principal.
- **Do** respetar los lockups oficiales de GDG y usar Google Sans desde los archivos locales.
- **Do** mantener un foco visible (anillo azul de 2px) en todo lo que se puede tocar.

### Don't:

- **Don't** usar degradados en fondos de cards, contenedores o texto en el sitio principal (The No-Gradient Rule). El título de "Fotos de nuestros eventos", el CTA de Call 4 Members y el footer claro tienen degradados que son deuda.
- **Don't** pasar de `shadow-md` en elementos que no flotan sobre la página.
- **Don't** escalar botones o portadas más de 1.05 al hover.
- **Don't** usar hex sueltos en clases (`bg-[#3367D6]`, `bg-[#0f0f0f]`) ni tokens inexistentes como `text-google-blue`.
- **Don't** llevar motivos de un tema de evento (monospace, `//`, auroras, glows, CTAs de 6px) al sitio principal.
- **Don't** agregar nuevas bandas oscuras al home; las tres actuales ya son el techo.
- **Don't** usar los cuatro colores de Google como bloques de fondo que compiten entre sí.
