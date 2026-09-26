# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Cuatro audiencias confirmadas, sin una única audiencia dominante:

1. **Desarrolladores de Tarija**: buscan saber quién es la comunidad, qué eventos vienen y cómo participar (asistir, dar charlas, sumarse al equipo).
2. **Estudiantes de Ingeniería de Sistemas**: entran por un evento puntual o una convocatoria compartida por WhatsApp o redes y deciden si inscribirse o unirse como miembros.
3. **Otros GDGs de Latinoamérica**: revisan qué hace GDG Tarija (eventos, formato, equipo) como referencia o para colaborar.
4. **Sponsors y aliados** (empresas, universidades, instituciones): evalúan la trayectoria y la seriedad de la comunidad antes de patrocinar o colaborar.

## Product Purpose

gdgtarija.com es la **vitrina y puerta de entrada** de Google Developer Group Tarija. Muestra identidad, trayectoria, equipo y próximos eventos, y deriva al visitante a donde ocurre la acción real:

- Inscripción a eventos: la plataforma propia `eventos.gdgtarija.com` (eventos históricos en `gdg.community.dev`).
- Convocatorias (miembros, speakers, sponsors): Google Forms y documentos externos.
- Seguimiento: redes sociales (Instagram, LinkedIn, Facebook, YouTube, TikTok).

El éxito es que cada audiencia llegue sin fricción a su siguiente paso: inscribirse, postularse, seguir a la comunidad o contactar (`gdgtarija@gmail.com`).

## Positioning

Es el capítulo oficial de Google Developer Groups en Tarija, Bolivia: una comunidad local de voluntarios organizada por comisiones, que organiza eventos para developers desde 2013 (DevFest, Google I/O Extended, International Women's Day, Build with AI, talleres propios) y tiene su propia plataforma de eventos. El historial detallado de `public/events.json` cubre solo desde 2022. Lo que otro sitio no puede copiar son sus personas reales, su historial de eventos en Tarija y su pertenencia a la red global de GDG.

## Operating Context

- **Home (`/`)**: banner de campaña temporal (Call 4 Members, con fecha límite), Quiénes somos / Misión / Visión, fotos de la comunidad, historial de eventos, miembros del equipo y contacto.
- **Landings de eventos insignia**: `/build-with-ai` (Build with AI 2026, con agenda, speakers, sponsors, FAQ, paquetes de swag y Road to Build).
- **Rutas de redirección cortas** para compartir en redes y WhatsApp: `/call4speakers`, `/call4sponsors`, `/convocatoria-sponsor`, `/workshops`, `/road`, `/manual-gdg`. Muestran un loader breve y redirigen con `meta refresh`. Se crean con el workflow `.agents/workflows/create-redirect.md`.
- **`/links`**: hub de enlaces para las bios de redes sociales.
- **Códigos de conducta**: `/code-of-conduct` (eventos) y `/member-code-of-conduct` (miembros y colaboradores).
- **Distribución** (inferida del código, no medida): los enlaces se comparten sobre todo por WhatsApp y redes; por eso las imágenes Open Graph se optimizan para la vista previa de WhatsApp (cuadradas, menos de 300 KB).
- **Ciclo anual**: las campañas y eventos son estacionales (Call 4 Members, IWD, Build with AI, I/O Extended, DevFest). Los CTA con fecha caducan y hay que actualizarlos o retirarlos.

## Capabilities and Constraints

- Sitio estático con Astro 6, Tailwind CSS v4 (`@tailwindcss/vite`) y Motion. Sin backend en este repositorio.
- Despliegue en GitHub Pages con cada push a `master` (`.github/workflows/astro.yml`), dominio `gdgtarija.com` vía `CNAME`.
- El contenido vive en JSON: eventos (`public/events.json`), miembros (`src/components/main/members/members.json`), about, contacto, redes, y los datos de cada evento insignia (speakers, sponsors, milestones, FAQ).
- Las reglas de código de `AGENTS.md` son obligatorias (TypeScript estricto, `<Image />` de Astro, comentarios solo en español, SOLID/DRY, componentes comunes en `src/components/common/`).
- **Idioma: solo español.** No se planea versión en inglés.
- **Sin decidir:** si cada evento insignia (Build with AI, DevFest…) debe tener una identidad visual propia o heredar la del home. Hoy Build with AI 2026 tiene estilos y assets propios (`src/styles/bwai2026.css`, `src/assets/images/bwai2026/`).

## Brand Commitments

- **Guías de marca de GDG/Google obligatorias**: lockups oficiales de GDG, nombre "Google Developer Groups" / "GDG Tarija", colores de Google y la tipografía Google Sans (archivos locales en `src/assets/fonts/google-sans/`).
- Logos disponibles: `src/assets/images/bwai2026/gdg_tarija_logo.svg`, `GDG_Blue_H.svg`, `GDG_Blue_mini.svg`, `google-developers.svg`, y el logo cuadrado en Cloudinary usado como imagen OG por defecto.
- **Tono adulto y técnico (confirmado):** es una comunidad de developers, no un espacio infantil. Nada de recursos "family friendly" en visual ni en copy: chinchetas, fotos inclinadas, marcos tipo polaroid, radios exagerados.
- **Copy directo y corto:** decir "developers", sin segmentar en "estudiantes y profesionales"; no listar tipos de eventos ni cifras en los textos principales.
- Voz observada en el copy actual (no confirmada como regla): cercana y de tuteo ("¡Únete a la comunidad!", "Postúlate", "Conviértete en speaker").

## Evidence on Hand

- **Historial de 19 eventos** (2022–2026) con fecha, tipo, imagen y enlace, en `public/events.json`; imágenes en `public/img/events/`.
- **Equipo real**: 35 miembros con foto, bio, redes y comisión en `members.json`.
- **Fotos de la comunidad** en `public/img/photos-comunity/` y `src/assets/images/gdg-grupal-Call4.png`.
- **Textos institucionales** (Quiénes somos, Misión, Visión) en `src/components/main/about/infoAbout.json`.
- **Build with AI 2026**: speakers, sponsors, colaboradores, agenda Road to Build, FAQ, paquetes de swag y la sede UCB (`src/components/bwai2026/`).
- **Ausencias que no se deben inventar**: no hay testimonios, cifras de asistentes o de alcance, logos de sponsors históricos más allá de los de Build with AI 2026, ni menciones de prensa. No fabricar métricas ("+1000 devs") ni citas.

## Product Principles

1. **La acción vive en otro lado**: el sitio existe para dar confianza y dirigir. Cada sección debe terminar en un siguiente paso claro hacia la plataforma de eventos, un formulario o las redes.
2. **Personas y eventos reales como prueba**: la credibilidad ante sponsors y otros GDGs sale del historial, las fotos y el equipo reales, no de afirmaciones genéricas.
3. **Oficial y local a la vez**: respetar la marca de Google Developer Groups sin perder que es una comunidad de Tarija hecha por voluntarios.
4. **Pensado para el enlace compartido**: buena parte de las visitas llega desde WhatsApp o redes en el celular; la primera pantalla y la vista previa del enlace tienen que funcionar por sí solas.
5. **Contenido fechado, contenido vigente**: las campañas y CTA estacionales se mantienen al día; un CTA vencido resta credibilidad.
