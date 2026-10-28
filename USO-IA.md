# Declaración de uso de inteligencia artificial

**Autora:** Camila Mardones  
**Proyecto:** Mini portafolio con React  
**Asignatura:** Desarrollo de Frontend — Evaluación N.º 3  
**Fecha de esta declaración:** 28 de octubre de 2026

Esta declaración describe la ayuda recibida en la conversación de trabajo y las correcciones visibles en el repositorio revisado, hasta el commit `64bfbb1`. También distingue las propuestas que se entregaron en un ZIP y que todavía no aparecen en esa versión de GitHub. Debe actualizarse si se incorporan más cambios antes de la entrega.

## 1. IA usada

Utilicé ChatGPT para revisar mi repositorio, comparar el proyecto con las instrucciones y la rúbrica, identificar errores y recibir explicaciones y fragmentos de código.

La ayuda incluyó lectura del código, revisión de los documentos de la evaluación, generación de una propuesta visual y preparación de esta documentación. Por lo tanto, el uso de IA incluyó generación de código y de texto, además de explicaciones.

## 2. Modelo

Utilicé ChatGPT con el asistente de programación Codex. No registré el identificador exacto ni la versión del modelo mostrada en la interfaz, por lo que no los declaro como un dato confirmado.

## 3. Prompts realizados

Los siguientes prompts corresponden a solicitudes realizadas durante esta conversación. Se conserva su sentido; se normalizaron algunos espacios y se abreviaron los mensajes repetidos.

1. «https://github.com/CMardones06/mini-portafolio ayudame a entender porque la pagina no se ve».
2. «verifica que mi proyecto cumpla con lo solicitado en las instrucciones, en caso de que falte algo, explicame que exactamente».
3. «okay, vuelve a revisar el proyecto en el enlace https://github.com/CMardones06/mini-portafolio y comparalo con las instrucciones, dime que me falta para cumplir con las instrucciones y como hacerlo».
4. «vuelve a revisar el repositorio y compara nuevamente».
5. «ignoremos el readme y uso ia por mientras, ayudame a adaptar mi proyecto para que cumpla con las siguientes instrucciones, las imagenes son referencias visuales de como se deberia de ver».
6. «explicame en que archivos se hicieron cambios y cuales fueron».
7. «dime paso a paso que cambio hiciste en cada archivo, quiero hacerlos por mi cuenta».
8. «ayudame a escribir un readme y un documento de uso ia que cumpla con los requisitos solicitados en la pauta».

Como contexto entregué la dirección del repositorio, la guía paso a paso, las instrucciones, los requerimientos, la rúbrica y las imágenes de referencia.

## 4. Outputs

La IA entregó explicaciones, ejemplos de código, revisiones del cumplimiento de la pauta y una versión adaptada del proyecto.

| Respuesta o código recibido | Uso o estado en el repositorio revisado |
| --- | --- |
| Explicación de la falta de `return` en Header y Footer. | La corrección está incorporada. |
| Explicación de `Outlet` para mostrar rutas hijas. | El layout ya utiliza `Outlet`. |
| Corrección de la ruta `/sobre-mi` y del botón Explorar mediante `Link`. | Ambas correcciones están incorporadas. |
| Reorganización de Habilidades y Proyectos para declarar arreglos antes del JSX. | Está incorporada. |
| Ejemplo de props separadas para `TarjetaProyecto`. | El repositorio pasa `titulo`, `descripcion` y `enlace`. |
| Código del formulario con tres estados, campos controlados, validación y confirmación. | Está incorporado; la ayuda incluyó una implementación completa del componente. |
| Ejemplos de CSS, variables y adaptación a pantallas pequeñas. | Se incorporaron estilos y variables. Su presencia no implica que todos los detalles visuales estén terminados. |
| ZIP con una propuesta más amplia de diseño, iconos SVG, ilustraciones, página 404 y accesibilidad adicional. | Fue recibido como propuesta. Esas incorporaciones no aparecen en el commit usado como base de esta declaración. |
| Explicación de los cambios por archivo y pasos para realizarlos manualmente. | Se solicitó para revisar la propuesta y trabajar sobre los archivos. No se presenta la recepción de la explicación como prueba de implementación. |
| Borradores de `README.md` y `uso_ia.md`. | Estos documentos se redactaron con ayuda de la IA y requieren revisión antes de la entrega. |

Las propuestas del ZIP que todavía no están incorporadas se consideran pendientes, no cambios ya realizados. No se registró una decisión definitiva de descartarlas.

El asistente informó pruebas de compilación, revisión con ESLint y pruebas en navegador sobre la versión adaptada que preparó. Esas pruebas no se presentan como ejecutadas personalmente por mí ni como garantía sobre una versión distinta del repositorio.

## 5. Ajustes

Los ajustes se describen según lo que aparece en el código revisado y las decisiones expresadas en esta conversación. No atribuyo a trabajo independiente los fragmentos generados por la IA.

- El contenido se mantuvo vinculado a mi nombre, mi carrera, mis intereses y mis proyecciones. Las recomendaciones generales se aplicaron al contexto de mi portafolio.
- En Proyectos se reemplazaron textos genéricos como «Proyecto 1» y «Descripción del proyecto 1» por títulos y descripciones de mis tres trabajos. Se utilizaron enlaces a mis repositorios de paleta de colores, integrales definidas y portafolio personal.
- Se conservaron mis tecnologías, herramientas y niveles declarados, en lugar de incorporar automáticamente todas las habilidades de las imágenes de referencia.
- Se ajustaron los nombres de los datos para que el arreglo y `TarjetaProyecto` utilizaran las mismas props: `titulo`, `descripcion` y `enlace`.
- El formulario se integró en `Contacto.jsx` y mantiene el nombre `email` de forma consistente entre el estado y los campos. Su funcionamiento es local; no se agregó un backend ni se declara un envío real de correos.
- Solicité explicaciones por archivo y paso a paso para realizar los cambios por mi cuenta. Eso expresa el modo de trabajo solicitado, pero no demuestra por sí solo que todas las propuestas hayan sido implementadas o comprendidas.
- La documentación se preparó para la versión publicada del repositorio. Las funciones adicionales del ZIP no se describen como presentes en esa versión.

La adaptación visual completa y cualquier modificación posterior deben añadirse a esta sección solo cuando efectivamente se incorporen, indicando qué se conservó, qué se cambió y por qué.

## 6. Reflexión crítica

**Borrador de reflexión para revisar y adaptar con mi experiencia personal antes de entregar.**

La ayuda de la IA fue útil para relacionar errores concretos con archivos del proyecto. Por ejemplo, una pantalla vacía podía estar relacionada con un componente sin `return`, con la falta de `Outlet` o con errores de sintaxis. También permitió identificar una diferencia importante: que el proyecto compile no asegura que las tarjetas estén mostrando sus datos, porque las props pueden estar conectadas de forma incorrecta.

Los puntos que más revisión requirieron durante el proceso fueron la ubicación de los arreglos y del `return`, el paso de datos entre componentes y el estado del formulario. Pedí una explicación por archivo y paso a paso porque recibir una versión terminada no reemplaza el trabajo de revisar y comprender los cambios.

Los conceptos principales que debo poder explicar son cómo React Router muestra cada página, cómo una tarjeta recibe sus props y cómo `useState`, `value` y `onChange` mantienen los datos del formulario. Debo comprobar mi comprensión modificando y probando esos elementos, sin asumir que copiar un fragmento basta para aprenderlo.

Una limitación observada es que las respuestas y pruebas de la IA corresponden a la versión que revisó en cada momento. Después de modificar o copiar código, debo volver a comprobar mi propia versión. La responsabilidad de la entrega, de la declaración de ayuda recibida y de explicar el código sigue siendo mía.
