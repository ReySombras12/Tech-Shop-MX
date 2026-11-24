# Tech-Shop-MX

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Licencia: MIT](https://img.shields.io/badge/Licencia-MIT-green.svg)

Proyecto final desarrollado para la materia de **Programación Web** por **Ricardo Rojas**, como parte de mis estudios en **Ingeniería en Sistemas Computacionales**.

**Tech Shop MX** (*"Tu tecnología en manos expertas"*) es una aplicación web pensada para mostrar servicios profesionales de reparación de dispositivos y una tienda en línea de equipos electrónicos reacondicionados, promoviendo la economía circular y el aprovechamiento responsable de la tecnología.

## Tecnologías utilizadas

- **HTML5**: Estructura semántica en todas las pantallas del sitio (inicio, catálogo, inicio de sesión y registro).
- **CSS3**: Hojas de estilo personalizadas (`estilos.css`, `catalogo.css`) para el diseño visual y la adaptación de la interfaz.
- **JavaScript (Vanilla JS)**: Programación del lado del cliente para el filtrado dinámico del catálogo, ventanas modales de detalle y validación de formularios (`catalogo.js`, `script.js`), sin usar frameworks externos.
- **Licencia**: MIT.

## Características principales

- **Página principal (`PROYECTO/Pagina_Principal.html`)**: Portada informativa sobre los servicios de reparación y equipos reacondicionados, acompañada de una sección de productos recomendados.
- **Catálogo interactivo de productos (`PROYECTO/catalogo.html` y `PROYECTO/JS/catalogo.js`)**:
  - Catálogo con **40 dispositivos simulados** (8 por categoría, incluyendo teléfonos inteligentes, tabletas, audífonos y más).
  - Filtrado por múltiples criterios: **categoría**, **marca**, **rango de precio** y **estado**, junto con una opción para restablecer los filtros rápidamente.
  - **Ventana modal de detalle** con las especificaciones completas de cada equipo (se puede cerrar con el botón, haciendo clic fuera del modal o presionando la tecla `Esc`).
- **Pantallas de autenticación (`PROYECTO/iniciosesion.html`, `PROYECTO/registro.html` y `PROYECTO/JS/script.js`)**:
  - Formularios de inicio de sesión y registro con validaciones en el navegador (como la verificación de longitud mínima de contraseña).
  - Función para mostrar u ocultar la contraseña al hacer doble clic sobre el campo.

## Estructura del proyecto

```text
Tech-Shop-MX/
├── PROYECTO/
│   ├── CSS/
│   │   ├── catalogo.css
│   │   └── estilos.css
│   ├── Img/
│   ├── JS/
│   │   ├── catalogo.js
│   │   └── script.js
│   ├── Pagina_Principal.html
│   ├── catalogo.html
│   ├── iniciosesion.html
│   └── registro.html
├── LICENSE
└── README.md
```

## Cómo probarlo en tu computadora

1. Clona el repositorio en tu equipo:
   ```bash
   git clone https://github.com/ReySombras12/Tech-Shop-MX.git
   ```
2. Abre el archivo `PROYECTO/Pagina_Principal.html` directamente en cualquier navegador web moderno, o sirve la carpeta `PROYECTO/` con un servidor local (por ejemplo, la extensión **Live Server** de VS Code).

## Aprendizajes y retos

Construir este proyecto me permitió afianzar la lógica de programación web sin depender de librerías externas. Uno de los mayores retos fue coordinar varios filtros al mismo tiempo sobre los 40 productos del catálogo y cuidar detalles de experiencia de usuario, como el cierre del modal con la tecla `Esc` y la retroalimentación directa en los formularios.
