Crea un nuevo CRUD para la entidad `$ARGUMENTS`

utiliza un razonamiento: adaptive thinking

1. Toma como ejemplo el CRUD de product-category en `src\app\features\admin\sponsor` analizalo para mantener el estilo
Con la siguientes consideraciones
2. Analiza y actualiza la base de datos `supabase\migrations` que sea compatible con supabase con todos las configuraciones necesarios, toma como ejemplo `supabase\migrations\sponsors.sql` y crea el archivo `supabase\migrations\$ARGUMENTS.sql`
3. Todos los componentes, class de estilo y variables deben estar en ingles, solo los labels y registros en ES, no agregues iconos innecesarios y conserva el estilo base.
4. Ruta base para todo el CRUD en `src/app/features/admin/$ARGUMENTS/`.
5. Utliza las propiedades que se espesifican en `.opencode\docs\entities.md` y agrega la interfaz en `src/app/core/models/` y realiza los ajustes en otras solo si fuera necesario y estan relacionadas
6. El CRUD debe constar los siguientes componentes empleando componentes base de angular material, en modo standalone.
   - dashboard : componente que contiene.
     - Tabla que es otro sub componente con las columnas mas relevantes, para mostrar todos los registros que incluya paginacion, ordenamiento y una columna extra con las siguientes opciones:
       - Boton para editar, que despliega el mismo modal que funciona para agregar y editar.
       - Boton ver para mostrar un modal para mostrar la informacion del registro.
       - Boton eliminar que muestra un dialogo de confirmacion para eliminar el registro.
     - Caja de busqueda para filtrar los registros.
     - Boton para agregar un nuevo registro, un boton notorio en la parte superior que permite desplegar un modal para agregar un nuevo registro
   - modal para crear o editar : componente que se presenta como modal con el boton del dashboard que permite registrar o editar mediante un fomulario con las validaciones correspondientes y los labels en ES considerando la funcionalidad de poder maximizar, cambiar de tamano y minizar como los formularios de features existentes.
   - modal informativo : compoente que se presenta como modal con el boton de mostrar de ver en la tabla que muestra toda la informacion del registro que no se muestra en las columnas de la tabla, esta vista debe tener un boton para poder imprimir la informacion.
7. Crea los componentes necesarios en las rutas correspondientes considerando los modulos definidos en `.opencode\docs\features.md` para crear cada feature en su carpeta correspondiente en `src\app\features`
8. Ajustar el menu de navegacion para coincidir con modulos y categorias definidos en `.opencode\docs\features.md`
9. La ruta lazy en `app.routes.ts` bajo AdminLayout
10. Agrega el servicio correspondiente `sb-$ARGUMENTS.ts` en `core/services/supabase/` para poder registrar el crud correspondiente
11. Realiza los ajutes necesarios si es pertinente en otros componentes compatidos en `src/app/shared/components/`, directivas en  `src/app/shared/directives/` y pipes en `src/app/shared/pipes/`
12. Comprueba que todo esta funcionando correntamente con las versiones de angular 21
13. Sigue las convenciones del AGENTS.md: signals, sin HTTP, Angular Material.
