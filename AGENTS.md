# AGENTS.md

> Instrucciones para agentes de IA (Antigravity, Claude Code, Cursor, Copilot, etc.) trabajando en este repositorio.

Este es el proyecto **GDG Tarija Landing Page**, un sitio web estático desarrollado con Astro v6 + Tailwind CSS v4 para la comunidad Google Developer Groups de Tarija, Bolivia.

---

## 🧞 Comandos del proyecto

```bash
# Desarrollo
npm start            # Inicia servidor de desarrollo local → http://localhost:4321
npm run dev          # Alias para iniciar servidor de desarrollo
npm run build        # Compila el sitio para producción en ./dist/
npm run preview      # Previsualiza localmente el build de producción

# Calidad y Formato
npm run format       # Prettier para formatear y ordenar el código en todo el proyecto
npm run format:check # Verifica que el código cumpla con las directivas de formato
```

---

## 📐 Reglas que el agente DEBE seguir

### Arquitectura y Framework (Astro)

1. **Componentes Puros e Islas de Interactividad:** Escribe componentes de Astro (`.astro`) enfocados en estructura HTML limpia y lógica en el frontmatter. Si un componente requiere interactividad compleja con JavaScript de cliente, utiliza islas de interactividad adecuadas o scripts hidratados de manera aislada.
2. **TypeScript Estricto:** Se mantiene `strict: true` en TypeScript. Evita a toda costa el uso de `any`; usa narrowing o tipados explícitos basados en props y datos reales.
3. **Optimización de Assets:** Utiliza el componente `<Image />` nativo de Astro para imágenes locales a fin de optimizar peso y dimensiones automáticamente.

### Estilos (Tailwind CSS v4 & CSS Puro)

4. **Tailwind CSS v4 nativo:** Se utiliza Tailwind CSS v4 mediante `@tailwindcss/vite` (declarado en `astro.config.mjs`). No agregues clases inline redundantes si el archivo se vuelve complejo; prefiere modularizar el código o usar CSS modules/archivos CSS puros para estructurar componentes complejos.
5. **Variables CSS globales:** Usa variables CSS (`:root`) definidas para temas de colores, espaciados y componentes globales.
6. **No degradados no autorizados:** Evita el uso de gradientes complejos en fondos de tarjetas y contenedores a menos que el diseño lo exija específicamente.
7. **Diseño Limpio y Premium:** Mantén bordes redondeados consistentes (`rounded-3xl` para cards, `rounded-full` para botones), sombras sutiles (`shadow-sm`) y una paleta de colores limpia (los colores oficiales de Google).

### Estilo de Código y Filosofía

8. **Legibilidad y Orden > Velocidad:** Prioriza la mantenibilidad y claridad sobre trucos complejos o código altamente optimizado pero ilegible.
9. **SOLID & DRY:** Sigue los principios SOLID. Evita la duplicación extrayendo lógica común en funciones utilitarias o componentes comunes reutilizables en `src/components/common/`.
10. **Comentarios únicamente en Español:** Documenta el _por qué_ de la lógica compleja bloque por bloque. No uses comentarios redundantes que solo describan _qué_ hace el código.

---

## 📝 Convenciones de Commits

Utiliza Conventional Commits en español o inglés de manera consistente:

```text
feat(home): agregar sección de próximos talleres
fix(navbar): corregir desalineamiento de logo en dispositivos móviles
chore(deps): actualizar dependencias de Astro y Tailwind
docs(readme): documentar procedimiento de despliegue local
refactor(card): simplificar lógica de renderizado de imagen en Card.astro
```

---

## 📂 Estructura General del Código

- [`src/pages/`](file:///Users/pedroanze/Documents/gdg/gdg-tarija/src/pages): Define las rutas y páginas del sitio.
- [`src/components/`](file:///Users/pedroanze/Documents/gdg/gdg-tarija/src/components): Carpeta de componentes reutilizables organizados por módulos o eventos.
- [`src/layouts/`](file:///Users/pedroanze/Documents/gdg/gdg-tarija/src/layouts): Contenedor base de páginas para inyectar cabeceras, pie de página y metatags de SEO.
