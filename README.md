# Mini portafolio — Camila Mardones

Portafolio personal desarrollado para la Evaluación N.º 3 de Desarrollo de Frontend, de Ingeniería Civil en Informática de la Universidad Católica de Temuco.

El sitio presenta mis estudios, intereses, habilidades y proyectos. Está construido con React y Vite, utiliza React Router para navegar entre cinco páginas y contiene un formulario de contacto con validación local.

## Tecnologías

- React y JavaScript con JSX.
- React Router para la navegación.
- CSS para la presentación y la adaptación de la interfaz.
- Vite para el servidor de desarrollo y la compilación.
- ESLint para la revisión estática del código.

## Requisitos

- Node.js: versión 20.19 o posterior de la rama 20, o versión 22.12 o superior, según los requisitos de Vite utilizado por este proyecto.
- npm, incluido con Node.js.
- Git, si se descargará el proyecto mediante clonación.
- Un navegador web.

Para comprobar las herramientas:

```bash
node --version
npm --version
git --version
```

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/CMardones06/mini-portafolio.git
```

Entrar a la carpeta:

```bash
cd mini-portafolio
```

Instalar las dependencias:

```bash
npm install
```

Si el proyecto se descarga como ZIP, primero hay que extraerlo y abrir una terminal en la carpeta donde está `package.json`.

## Ejecución en desarrollo

```bash
npm run dev
```

Abrir la dirección que indique la terminal. Habitualmente es `http://localhost:5173/`, pero puede usar otro puerto si ese está ocupado.

El servidor debe permanecer ejecutándose mientras se utiliza el sitio. Para detenerlo, presionar `Ctrl + C` en la terminal.

## Otros comandos

| Comando | Función |
| --- | --- |
| `npm run build` | Genera la versión de producción en `dist/`. |
| `npm run preview` | Permite revisar localmente la versión generada por `build`. |
| `npm run lint` | Revisa el código con ESLint. |

Antes de usar `preview`, ejecutar `npm run build`. La carpeta `dist/` y las dependencias de `node_modules/` están excluidas del repositorio mediante `.gitignore`.

## Páginas y rutas

| Ruta | Página | Contenido |
| --- | --- | --- |
| `/` | Inicio | Mi nombre, mi rol como estudiante, una bienvenida y el enlace Explorar. |
| `/sobre-mi` | Sobre mí | Mi carrera, mis intereses y mis proyecciones. |
| `/habilidades` | Habilidades | Tecnologías y herramientas con un nivel declarado. |
| `/proyectos` | Proyectos | Tres trabajos con título, descripción y enlace a su repositorio. |
| `/contacto` | Contacto | Formulario con nombre, correo electrónico y mensaje. |

El orden del menú es Inicio, Sobre mí, Habilidades, Proyectos y Contacto. La navegación utiliza rutas de React Router. El header y el footer se comparten mediante `Layout`.

## Estructura y archivos principales

| Archivo o carpeta | Responsabilidad |
| --- | --- |
| `index.html` | Documento HTML de entrada, idioma, título y elemento donde se monta React. |
| `package.json` | Dependencias y comandos del proyecto. |
| `package-lock.json` | Registro de las versiones resueltas de las dependencias. |
| `vite.config.js` | Configuración de Vite. |
| `eslint.config.js` | Configuración de ESLint. |
| `public/` | Recursos estáticos, como el favicon. |
| `src/main.jsx` | Monta la aplicación, importa el CSS y envuelve `App` con `BrowserRouter`. |
| `src/App.jsx` | Declara las rutas y su relación con el layout. |
| `src/index.css` | Estilos generales y de los componentes. |
| `src/assets/` | Recursos disponibles para importar desde el código. |
| `src/components/Header.jsx` | Menú de navegación construido con `NavLink`. |
| `src/components/Footer.jsx` | Nombre de la autora y año calculado automáticamente. |
| `src/components/Layout.jsx` | Combina Header, `Outlet` y Footer. |
| `src/components/TarjetaProyecto.jsx` | Recibe `titulo`, `descripcion` y `enlace` por props. |
| `src/components/FormularioContacto.jsx` | Maneja los valores, los errores y la confirmación del formulario. |
| `src/pages/Inicio.jsx` | Contenido de la página inicial. |
| `src/pages/SobreMi.jsx` | Presentación personal, estudios e intereses. |
| `src/pages/Habilidades.jsx` | Arreglos de habilidades y herramientas, recorridos con `.map()`. |
| `src/pages/Proyectos.jsx` | Datos de los proyectos y creación de las tarjetas. |
| `src/pages/Contacto.jsx` | Presentación e inclusión del formulario. |

## Funcionamiento del formulario

El componente utiliza `useState` para manejar los valores de los campos, los mensajes de error y la confirmación.

- Los campos son controlados mediante `value` y `onChange`.
- Un único manejador de cambios identifica el campo mediante su atributo `name`.
- El envío utiliza `preventDefault()` para evitar recargar la página.
- Nombre, correo y mensaje son obligatorios. Se usa `.trim()` para rechazar valores formados únicamente por espacios.
- El correo se valida con una expresión regular.
- Los errores se muestran debajo de cada campo.
- Si los datos son válidos, aparece una confirmación y se limpian los campos.

El formulario es una demostración de validación en el navegador: no está conectado a un backend, no guarda mensajes y no envía correos electrónicos.

## Proyectos incluidos

- [Paleta de colores](https://github.com/CMardones06/26-08).
- [Animación de integrales definidas](https://github.com/CMardones06/EID-CalculoIntermedio-G06).
- [Portafolio personal](https://github.com/CMardones06/frontend-portafolio).

## Dificultades encontradas y soluciones

Durante el desarrollo aparecieron los siguientes problemas. Las correcciones se trabajaron con apoyo de IA, descrito en `uso_ia.md`.

| Dificultad | Solución incorporada |
| --- | --- |
| Header y Footer no devolvían su JSX y no se mostraban. | Agregar `return` a ambos componentes. |
| Las páginas hijas no aparecían en el layout porque se utilizaba `children`. | Importar y renderizar `Outlet` para las rutas anidadas. |
| El enlace Sobre mí utilizaba una ruta distinta a la declarada. | Unificar el enlace y la ruta con `/sobre-mi`. |
| Habilidades tenía un `return` antes de los arreglos; después quedó una declaración dentro de un `return` incompleto. | Eliminar el primer `return`, declarar los datos antes del JSX y conservar una única devolución del contenido. |
| Proyectos tenía el arreglo dentro del JSX y un `return` fuera de la función. | Mover el arreglo antes del `return` y mantener el JSX dentro de la función. |
| Las tarjetas recibían un objeto `proyecto`, pero el componente esperaba props separadas. | Pasar `titulo`, `descripcion` y `enlace` con los mismos nombres usados por la tarjeta. |
| El botón Explorar tenía un atributo `link` que no producía navegación. | Utilizar `Link` con la prop `to`. |
| El formulario inicialmente solo tenía campos y no capturaba ni validaba sus valores. | Incorporar estados, campos controlados, validación por campo y confirmación. |

**Camila Mardones** — estudiante de Ingeniería Civil en Informática, Universidad Católica de Temuco.

La declaración de herramientas, prompts, respuestas, ajustes y reflexión se encuentra en USO-IA.md
