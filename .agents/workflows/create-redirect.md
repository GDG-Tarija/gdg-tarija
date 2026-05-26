---
description: Generación de Redirecciones
---

Este documento define el flujo estándar para crear nuevas páginas de redirección en el sitio web de GDG Tarija.

## Entrada

- **Slug:** La ruta URL deseada (ej. `instagram`, `convocatoria/speakers`).
- **URL de destino:** El enlace completo al que redirigir.

## Pasos

1. **Ejecutar Script de Redirección:**

   ```bash
   node scripts/create-redirect.js <slug> <url>
   ```

2. **Formatear el Código:**

   ```bash
   npm run format
   ```

3. **Verificar Localmente (Opcional):**
   ```bash
   npm run dev
   ```
