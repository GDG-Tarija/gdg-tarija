# 🚀 GDG Tarija - Portal Oficial

Sitio web oficial y landing page comunitaria de **Google Developer Group (GDG) Tarija**, construido con un enfoque de alto rendimiento, accesibilidad y diseño premium.

[![Astro](https://img.shields.io/badge/Astro-v6.1.1-ff5e00?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Prettier](https://img.shields.io/badge/Code_Style-Prettier-f7b93e?logo=prettier&logoColor=white)](https://prettier.io)
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

---

## 🛠️ Stack Tecnológico

*   **Framework:** [Astro v6.1.1](https://astro.build/) (Renderizado estático súper veloz e islas de interactividad).
*   **Estilos (CSS):** [Tailwind CSS v4.0](https://tailwindcss.com/) (Maquetación ágil, limpia y responsive con integración nativa en Vite).
*   **Animaciones:** [Motion](https://motion.dev/) (Para micro-interacciones pulidas) y `tailwindcss-animated`.
*   **Formateador de Código:** [Prettier](https://prettier.io/) junto a `prettier-plugin-astro` para mantener el orden.

---

## 📂 Estructura del Proyecto

El código fuente está organizado de la siguiente manera para promover la legibilidad, mantenibilidad y modularidad (Principios SOLID & KISS):

```text
/
├── .agents/               # Configuración local para agentes de IA (Antigravity/OpenCode)
│   ├── skills/            # Habilidades y guías del diseño y arquitectura
│   └── workflows/         # Flujos estandarizados (ej. generación de redirecciones)
├── public/                # Recursos estáticos globales (imágenes, favicon, CNAME)
├── scripts/               # Scripts utilitarios de automatización en Node.js
└── src/
    ├── assets/            # Recursos del sitio (imágenes, logos de eventos, etc.)
    ├── components/        # Componentes UI reutilizables
    │   ├── bwai2026/      # Componentes del evento Build With AI 2026
    │   ├── common/        # Componentes genéricos (botones, cards, etc.)
    │   └── main/          # Componentes clave del Home (About, Events, Contact, etc.)
    ├── layouts/           # Plantillas de páginas compartidas (Layout.astro)
    └── pages/             # Enrutamiento basado en archivos (Astro / HTML)
```

---

## 🗺️ Páginas y Rutas Disponibles

El enrutamiento de Astro mapea los archivos en `src/pages/` directamente a URLs públicas:

*   `/` ([`index.astro`](file:///Users/pedroanze/Documents/gdg/gdg-tarija/src/pages/index.astro)): Página principal de la comunidad GDG Tarija.
*   `/build-with-ai` ([`build-with-ai.astro`](file:///Users/pedroanze/Documents/gdg/gdg-tarija/src/pages/build-with-ai.astro)): Landing page del evento "Build with AI 2026".
*   `/call4speakers` ([`call4speakers.astro`](file:///Users/pedroanze/Documents/gdg/gdg-tarija/src/pages/call4speakers.astro)): Formulario e información para postulaciones de ponentes.
*   `/call4sponsors` ([`call4sponsors.astro`](file:///Users/pedroanze/Documents/gdg/gdg-tarija/src/pages/call4sponsors.astro)): Convocatoria y beneficios para patrocinadores de eventos.
*   `/code-of-conduct` ([`code-of-conduct.astro`](file:///Users/pedroanze/Documents/gdg/gdg-tarija/src/pages/code-of-conduct.astro)): Código de conducta oficial de la comunidad.
*   `/member-code-of-conduct` ([`member-code-of-conduct.astro`](file:///Users/pedroanze/Documents/gdg/gdg-tarija/src/pages/member-code-of-conduct.astro)): Código de conducta específico para miembros y colaboradores.
*   `/road` ([`road.astro`](file:///Users/pedroanze/Documents/gdg/gdg-tarija/src/pages/road.astro)): Hoja de ruta y planes de la comunidad.
*   `/workshops` ([`workshops.astro`](file:///Users/pedroanze/Documents/gdg/gdg-tarija/src/pages/workshops.astro)): Directorio y registro de talleres.

---

## 🧞 Comandos de Desarrollo

Todos los comandos se deben ejecutar desde la raíz del proyecto usando una terminal:

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala las dependencias del proyecto. |
| `npm run dev` / `npm start` | Inicia el servidor de desarrollo local en `http://localhost:4321`. |
| `npm run build` | Compila el sitio estático optimizado para producción en `./dist/`. |
| `npm run preview` | Previsualiza localmente el build de producción antes de desplegar. |
| `npm run format` | Aplica formato al código automáticamente usando Prettier. |
| `npm run format:check` | Verifica que el código cumpla con las reglas de estilo de Prettier. |

---

## 📐 Reglas y Filosofía de Desarrollo

Para asegurar la calidad a largo plazo, este proyecto adopta reglas estrictas de desarrollo:

1.  **Legibilidad > Astucia:** Es preferible un código fácil de leer y comprender a una solución sumamente ingeniosa o hiper-optimizada pero compleja.
2.  **No usar Tailwind CSS inline desmedido:** Utilizar archivos CSS estructurados o el sistema de componentes si el markup se vuelve ilegible.
3.  **Clean Code:** Mantén los componentes pequeños, con una única responsabilidad y nombres autodocumentados.
4.  **Comentarios en Español:** Justifica siempre el *por qué* de las decisiones complejas en el código únicamente en español.
5.  **Estabilidad Visual:** No usar placeholders temporales sin sentido o estilos rotos en producción. Verifica localmente con `npm run build` antes de subir cambios.
