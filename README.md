# Tech-Shop-MX

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

A web application for **Tech Shop MX** (*"Tu tecnología en manos expertas"*), built as a Final Web Programming Project (*Proyecto Final de Programación Web*). The platform showcases professional device repair services and a refurbished electronics storefront designed to promote the circular economy.

## Technologies Used

- **HTML5** — Semantic structure across landing, catalog, login, and registration pages
- **CSS3** — Custom responsive stylesheets (`estilos.css`, `catalogo.css`)
- **Vanilla JavaScript** — Client-side DOM filtering, modal previews, and form validation (`catalogo.js`, `script.js`)
- **License** — MIT License

## Key Features

- **Landing Page (`PROYECTO/Pagina_Principal.html`)**: Hero banner introducing repair services and refurbished devices, plus a recommended products grid.
- **Interactive Product Catalog (`PROYECTO/catalogo.html` & `PROYECTO/JS/catalogo.js`)**:
  - Catalog of **40 simulated devices** (8 per category, including smartphones, tablets, headphones, and more).
  - Multi-criteria filtering by **category**, **brand**, **price range**, and **condition**, with quick filter reset.
  - Interactive **product detail modal** with full specifications (dismissible via close button, backdrop click, or `Escape`).
- **Authentication UI (`PROYECTO/iniciosesion.html`, `PROYECTO/registro.html` & `PROYECTO/JS/script.js`)**:
  - Login and user registration forms with client-side validation (including minimum password length verification).
  - Double-click password visibility toggle on password fields.

## Project Structure

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

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/ReySombras12/Tech-Shop-MX.git
   ```
2. Open `PROYECTO/Pagina_Principal.html` directly in any modern web browser, or serve the `PROYECTO/` folder using a local static server (such as VS Code Live Server).
