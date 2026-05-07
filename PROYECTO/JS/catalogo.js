// ============================================
// CATÁLOGO DE DISPOSITIVOS - TECH SHOP MX
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // BASE DE DATOS SIMULADA DE PRODUCTOS
    // 8 productos por categoría (40 total)
    // ============================================
    const productos = [
        // ============================================
        // CELULARES (8)
        // ============================================
        {
            id: 1,
            categoria: 'celulares',
            marca: 'samsung',
            nombre: 'Samsung Galaxy A56',
            estado: 'excelente',
            precio: 3499,
            descripcion: 'Reacondicionado, 128GB de almacenamiento, libre de fábrica. Batería en óptimas condiciones.',
            especificaciones: 'Pantalla: 6.5" Super AMOLED | RAM: 8GB | Almacenamiento: 128GB | Cámara: 50MP + 12MP | Batería: 5000mAh',
            imagen: 'Img/Samsung-A56.jpg.jpeg'
        },
        {
            id: 2,
            categoria: 'celulares',
            marca: 'samsung',
            nombre: 'Samsung Galaxy S23 FE',
            estado: 'excelente',
            precio: 6999,
            descripcion: 'Reacondicionado, 256GB, desbloqueado. Rendimiento flagship a precio accesible.',
            especificaciones: 'Pantalla: 6.4" Dynamic AMOLED | RAM: 8GB | Almacenamiento: 256GB | Cámara: 50MP + 12MP + 8MP | Batería: 4500mAh',
            imagen: 'Img/S23_FE.jpg'
        },
        {
            id: 3,
            categoria: 'celulares',
            marca: 'apple',
            nombre: 'iPhone 14',
            estado: 'bueno',
            precio: 12999,
            descripcion: 'Reacondicionado, 128GB, desbloqueado. Ligeras marcas de uso estéticas.',
            especificaciones: 'Pantalla: 6.1" Super Retina XDR | Chip: A15 Bionic | Almacenamiento: 128GB | Cámara: 12MP + 12MP | Face ID | 5G',
            imagen: 'Img/Iphone_14.jpg'
        },
        {
            id: 4,
            categoria: 'celulares',
            marca: 'apple',
            nombre: 'iPhone SE 2022',
            estado: 'excelente',
            precio: 6999,
            descripcion: 'Reacondicionado, 64GB. Compacto y potente, ideal para una sola mano.',
            especificaciones: 'Pantalla: 4.7" Retina HD | Chip: A15 Bionic | Almacenamiento: 64GB | Touch ID | Cámara: 12MP | 5G',
            imagen: 'Img/Iphone_SE_2022.jpg'
        },
        {
            id: 5,
            categoria: 'celulares',
            marca: 'samsung',
            nombre: 'Samsung Galaxy Z Flip 4',
            estado: 'bueno',
            precio: 9999,
            descripcion: 'Reacondicionado, 128GB. Plegable compacto, pantalla en excelente estado.',
            especificaciones: 'Pantalla: 6.7" Dynamic AMOLED plegable | RAM: 8GB | Almacenamiento: 128GB | Cámara: 12MP + 12MP | IPX8',
            imagen: 'Img/Galaxy_Z_Flip_4.jpg'
        },
        {
            id: 6,
            categoria: 'celulares',
            marca: 'apple',
            nombre: 'iPhone 12 Pro Max',
            estado: 'regular',
            precio: 8999,
            descripcion: 'Reacondicionado, 256GB. Detalles en el marco, pantalla impecable.',
            especificaciones: 'Pantalla: 6.7" Super Retina XDR | Chip: A14 Bionic | Almacenamiento: 256GB | Cámara: 12MP + 12MP + 12MP | 5G',
            imagen: 'Img/Iphone_12_Pro_Max.jpg'
        },
        {
            id: 7,
            categoria: 'celulares',
            marca: 'samsung',
            nombre: 'Samsung Galaxy A15',
            estado: 'excelente',
            precio: 2499,
            descripcion: 'Reacondicionado, 128GB. Gama de entrada confiable, batería de larga duración.',
            especificaciones: 'Pantalla: 6.5" Super AMOLED | RAM: 4GB | Almacenamiento: 128GB | Cámara: 50MP + 5MP + 2MP | Batería: 5000mAh',
            imagen: 'Img/samsung-a15.jpg'
        },
        {
            id: 8,
            categoria: 'celulares',
            marca: 'apple',
            nombre: 'iPhone 11',
            estado: 'bueno',
            precio: 4999,
            descripcion: 'Reacondicionado, 64GB. Clásico resistente, excelente relación calidad-precio.',
            especificaciones: 'Pantalla: 6.1" Liquid Retina | Chip: A13 Bionic | Almacenamiento: 64GB | Cámara: 12MP + 12MP | Face ID',
            imagen: 'Img/iphone11.jpg'
        },

        // ============================================
        // TABLETS (8)
        // ============================================
        {
            id: 9,
            categoria: 'tablets',
            marca: 'apple',
            nombre: 'iPad Air 5ta Gen',
            estado: 'excelente',
            precio: 12999,
            descripcion: 'Reacondicionada, 64GB, WiFi. Chip M1, rendimiento de laptop en tablet.',
            especificaciones: 'Pantalla: 10.9" Liquid Retina | Chip: Apple M1 | Almacenamiento: 64GB | Compatible con Apple Pencil 2 | WiFi 6',
            imagen: 'Img/ipad-air5.jpg'
        },
        {
            id: 10,
            categoria: 'tablets',
            marca: 'samsung',
            nombre: 'Samsung Galaxy Tab S9',
            estado: 'excelente',
            precio: 13999,
            descripcion: 'Reacondicionada, 128GB, WiFi. Pantalla Dynamic AMOLED 120Hz.',
            especificaciones: 'Pantalla: 11" Dynamic AMOLED 120Hz | RAM: 8GB | Almacenamiento: 128GB | S Pen incluido | IP68',
            imagen: 'Img/galaxy-tab-s9.jpg'
        },
        {
            id: 11,
            categoria: 'tablets',
            marca: 'apple',
            nombre: 'iPad Pro 11" 2021',
            estado: 'bueno',
            precio: 15999,
            descripcion: 'Reacondicionada, 128GB, WiFi. Pantalla ProMotion 120Hz, chip M1.',
            especificaciones: 'Pantalla: 11" Liquid Retina ProMotion | Chip: Apple M1 | Almacenamiento: 128GB | Face ID | Thunderbolt',
            imagen: 'Img/ipad-pro-11.jpg'
        },
        {
            id: 12,
            categoria: 'tablets',
            marca: 'samsung',
            nombre: 'Samsung Galaxy Tab A9+',
            estado: 'excelente',
            precio: 3999,
            descripcion: 'Reacondicionada, 64GB, WiFi. Perfecta para streaming y lectura.',
            especificaciones: 'Pantalla: 11" TFT | RAM: 4GB | Almacenamiento: 64GB | Android 13 | Batería: 7040mAh',
            imagen: 'Img/galaxy-tab-a9+.jpg'
        },
        {
            id: 13,
            categoria: 'tablets',
            marca: 'lenovo',
            nombre: 'Lenovo Tab P12 Pro',
            estado: 'excelente',
            precio: 8999,
            descripcion: 'Reacondicionada, 128GB, WiFi. Pantalla OLED 120Hz, lápiz incluido.',
            especificaciones: 'Pantalla: 12.6" OLED | RAM: 8GB | Almacenamiento: 128GB | Procesador: Snapdragon 870 | Android 12',
            imagen: 'Img/lenovo-tab-p12.jpg'
        },
        {
            id: 14,
            categoria: 'tablets',
            marca: 'apple',
            nombre: 'iPad Mini 6',
            estado: 'bueno',
            precio: 8999,
            descripcion: 'Reacondicionada, 64GB, WiFi. Compacta y potente, ideal para movilidad.',
            especificaciones: 'Pantalla: 8.3" Liquid Retina | Chip: A15 Bionic | Almacenamiento: 64GB | USB-C | Apple Pencil 2',
            imagen: 'Img/ipad-mini6.jpg'
        },
        {
            id: 15,
            categoria: 'tablets',
            marca: 'samsung',
            nombre: 'Samsung Galaxy Tab S6 Lite',
            estado: 'regular',
            precio: 4499,
            descripcion: 'Reacondicionada, 64GB, WiFi. Incluye S Pen, excelente para estudiantes.',
            especificaciones: 'Pantalla: 10.4" TFT | RAM: 4GB | Almacenamiento: 64GB | S Pen incluido | Batería: 7040mAh',
            imagen: 'Img/galaxy-tab-s6-lite.jpg'
        },
        {
            id: 16,
            categoria: 'tablets',
            marca: 'lenovo',
            nombre: 'Lenovo Yoga Tab 13',
            estado: 'bueno',
            precio: 7499,
            descripcion: 'Reacondicionada, 128GB. Soporte integrado, ideal para entretenimiento.',
            especificaciones: 'Pantalla: 13" 2K | RAM: 8GB | Almacenamiento: 128GB | Snapdragon 870 | Soporte integrado | WiFi 6',
            imagen: 'Img/lenovo-yoga-tab13.jpg'
        },

        // ============================================
        // AUDÍFONOS (8)
        // ============================================
        {
            id: 17,
            categoria: 'audifonos',
            marca: 'apple',
            nombre: 'AirPods Pro 2',
            estado: 'excelente',
            precio: 4799,
            descripcion: 'Reacondicionados, estuche MagSafe. Cancelación de ruido activa mejorada.',
            especificaciones: 'Tipo: In-ear | Cancelación de ruido activa | Audio espacial | Chip H2 | IPX4 | Estuche MagSafe',
            imagen: 'Img/airpods-pro2.jpg'
        },
        {
            id: 18,
            categoria: 'audifonos',
            marca: 'samsung',
            nombre: 'Samsung Galaxy Buds FE',
            estado: 'excelente',
            precio: 1999,
            descripcion: 'Reacondicionados, in-ear. Cancelación de ruido por excelente precio.',
            especificaciones: 'Tipo: In-ear | Cancelación de ruido activa | Sonido AKG | IPX2 | Batería: 6h + 15h estuche',
            imagen: 'Img/galaxy-buds-fe.jpg'
        },
        {
            id: 19,
            categoria: 'audifonos',
            marca: 'apple',
            nombre: 'AirPods Max',
            estado: 'bueno',
            precio: 8999,
            descripcion: 'Reacondicionados, over-ear. Sonido de alta fidelidad y diseño premium.',
            especificaciones: 'Tipo: Over-ear | Cancelación de ruido activa | Audio espacial | Chip H1 | 20h de batería | Almohadillas de memoria',
            imagen: 'Img/airpods-max.jpg'
        },
        {
            id: 20,
            categoria: 'audifonos',
            marca: 'samsung',
            nombre: 'Samsung Galaxy Buds Live',
            estado: 'regular',
            precio: 1499,
            descripcion: 'Reacondicionados, diseño tipo frijol. Sonido envolvente con ANC.',
            especificaciones: 'Tipo: In-ear abierto | Cancelación de ruido activa | Diseño ergonómico | IPX2 | Batería: 5.5h + 15h estuche',
            imagen: 'Img/galaxy-buds-live.jpg'
        },
        {
            id: 21,
            categoria: 'audifonos',
            marca: 'apple',
            nombre: 'AirPods 2da Gen',
            estado: 'excelente',
            precio: 2199,
            descripcion: 'Reacondicionados, estuche de carga estándar. Los clásicos de Apple.',
            especificaciones: 'Tipo: In-ear abierto | Chip H1 | Cambio automático | Siri siempre activo | 5h de batería',
            imagen: 'Img/airpods2.jpg'
        },
        {
            id: 22,
            categoria: 'audifonos',
            marca: 'dell',
            nombre: 'Dell Pro Wireless ANC',
            estado: 'excelente',
            precio: 2499,
            descripcion: 'Reacondicionados, over-ear. Certificados para trabajo, micrófono profesional.',
            especificaciones: 'Tipo: Over-ear | Cancelación de ruido activa | Micrófono con cancelación | 15h batería | USB-C',
            imagen: 'Img/dell-pro-anc.jpg'
        },
        {
            id: 23,
            categoria: 'audifonos',
            marca: 'lenovo',
            nombre: 'Lenovo ThinkPad X1 ANC',
            estado: 'bueno',
            precio: 2799,
            descripcion: 'Reacondicionados, over-ear. Diseñados para conferencias con micrófono boom.',
            especificaciones: 'Tipo: Over-ear | Cancelación de ruido activa | Micrófono boom | 20h batería | Bluetooth 5.2',
            imagen: 'Img/lenovo-x1-anc.jpg'
        },
        {
            id: 24,
            categoria: 'audifonos',
            marca: 'samsung',
            nombre: 'Samsung Galaxy Buds2',
            estado: 'excelente',
            precio: 1799,
            descripcion: 'Reacondicionados, in-ear ligeros. Sonido balanceado y cómodos.',
            especificaciones: 'Tipo: In-ear | Cancelación de ruido activa | Sonido AKG | IPX4 | Batería: 7.5h + 20h estuche',
            imagen: 'Img/galaxy-buds2.jpg'
        },

        // ============================================
        // LAPTOPS (8)
        // ============================================
        {
            id: 25,
            categoria: 'laptops',
            marca: 'dell',
            nombre: 'Dell Latitude 5430',
            estado: 'excelente',
            precio: 13999,
            descripcion: 'Reacondicionada, i7 12va Gen, 16GB RAM, SSD 512GB. Productividad empresarial.',
            especificaciones: 'Pantalla: 14" FHD | Procesador: Intel Core i7-1255U | RAM: 16GB DDR5 | SSD: 512GB NVMe | Windows 11 Pro',
            imagen: 'Img/dell-latitude-5430.jpg'
        },
        {
            id: 26,
            categoria: 'laptops',
            marca: 'lenovo',
            nombre: 'Lenovo ThinkPad T14 Gen 3',
            estado: 'excelente',
            precio: 14999,
            descripcion: 'Reacondicionada, i5 12va Gen, 16GB RAM, SSD 512GB. Teclado legendario.',
            especificaciones: 'Pantalla: 14" FHD IPS | Procesador: Intel Core i5-1245U | RAM: 16GB DDR4 | SSD: 512GB | Windows 11 Pro',
            imagen: 'Img/lenovo-t14-gen3.jpg'
        },
        {
            id: 27,
            categoria: 'laptops',
            marca: 'apple',
            nombre: 'MacBook Pro 13" M2',
            estado: 'bueno',
            precio: 19999,
            descripcion: 'Reacondicionada, chip M2, 8GB RAM, SSD 256GB. Touch Bar, batería con pocos ciclos.',
            especificaciones: 'Pantalla: 13.3" Retina | Chip: Apple M2 | RAM: 8GB unificada | SSD: 256GB | Touch Bar | macOS Ventura',
            imagen: 'Img/macbook-pro-m2.jpg'
        },
        {
            id: 28,
            categoria: 'laptops',
            marca: 'dell',
            nombre: 'Dell XPS 13 9315',
            estado: 'excelente',
            precio: 16999,
            descripcion: 'Reacondicionada, i5 12va Gen, 8GB RAM, SSD 256GB. Ultrabook premium InfinityEdge.',
            especificaciones: 'Pantalla: 13.4" FHD+ InfinityEdge | Procesador: Intel Core i5-1230U | RAM: 8GB | SSD: 256GB | Windows 11',
            imagen: 'Img/dell-xps-13.jpg'
        },
        {
            id: 29,
            categoria: 'laptops',
            marca: 'lenovo',
            nombre: 'Lenovo IdeaPad Flex 5',
            estado: 'bueno',
            precio: 8999,
            descripcion: 'Reacondicionada, 2 en 1 táctil. i3 11va Gen, 8GB RAM, SSD 256GB.',
            especificaciones: 'Pantalla: 14" FHD Touch | Procesador: Intel Core i3-1115G4 | RAM: 8GB | SSD: 256GB | Windows 11 | 360°',
            imagen: 'Img/lenovo-flex5.jpg'
        },
        {
            id: 30,
            categoria: 'laptops',
            marca: 'apple',
            nombre: 'MacBook Air 15" M2',
            estado: 'excelente',
            precio: 23999,
            descripcion: 'Reacondicionada, M2, 8GB RAM, SSD 256GB. Pantalla grande y ligera.',
            especificaciones: 'Pantalla: 15.3" Liquid Retina | Chip: Apple M2 | RAM: 8GB unificada | SSD: 256GB | Batería: 18h | macOS',
            imagen: 'Img/macbook-air-15.jpg'
        },
        {
            id: 31,
            categoria: 'laptops',
            marca: 'dell',
            nombre: 'Dell Inspiron 15 3525',
            estado: 'regular',
            precio: 6999,
            descripcion: 'Reacondicionada, Ryzen 5, 8GB RAM, SSD 256GB. Uso diario y estudiante.',
            especificaciones: 'Pantalla: 15.6" FHD | Procesador: AMD Ryzen 5 5500U | RAM: 8GB DDR4 | SSD: 256GB | Windows 11 Home',
            imagen: 'Img/dell-inspiron-3525.jpg'
        },
        {
            id: 32,
            categoria: 'laptops',
            marca: 'lenovo',
            nombre: 'Lenovo Legion 5 15ACH6',
            estado: 'bueno',
            precio: 17999,
            descripcion: 'Reacondicionada, gamer. Ryzen 7, 16GB RAM, RTX 3050, SSD 512GB.',
            especificaciones: 'Pantalla: 15.6" FHD 165Hz | Procesador: Ryzen 7 5800H | RAM: 16GB | GPU: RTX 3050 4GB | SSD: 512GB',
            imagen: 'Img/lenovo-legion5.jpg'
        },

        // ============================================
        // COMPUTADORAS DE ESCRITORIO (8)
        // ============================================
        {
            id: 33,
            categoria: 'computadoras',
            marca: 'dell',
            nombre: 'Dell OptiPlex 7000',
            estado: 'excelente',
            precio: 12999,
            descripcion: 'Reacondicionada, escritorio compacto. i7, 32GB RAM, SSD 1TB. Monitor 24".',
            especificaciones: 'Procesador: Intel Core i7-12700 | RAM: 32GB DDR5 | SSD: 1TB NVMe | Windows 11 Pro | Monitor 24" FHD',
            imagen: 'Img/dell-optiplex-7000.jpg'
        },
        {
            id: 34,
            categoria: 'computadoras',
            marca: 'lenovo',
            nombre: 'Lenovo ThinkCentre M90q',
            estado: 'excelente',
            precio: 11999,
            descripcion: 'Reacondicionada, mini PC empresarial. i5, 16GB RAM, SSD 512GB.',
            especificaciones: 'Procesador: Intel Core i5-12400T | RAM: 16GB DDR4 | SSD: 512GB NVMe | Windows 11 Pro | Sin monitor',
            imagen: 'Img/lenovo-m90q.jpg'
        },
        {
            id: 35,
            categoria: 'computadoras',
            marca: 'apple',
            nombre: 'Mac Mini M2 2023',
            estado: 'excelente',
            precio: 13999,
            descripcion: 'Reacondicionada, chip M2, 8GB RAM, SSD 256GB. Compacta y poderosa.',
            especificaciones: 'Procesador: Apple M2 | RAM: 8GB unificada | SSD: 256GB | macOS Ventura | Sin monitor ni periféricos',
            imagen: 'Img/mac-mini-m2.jpg'
        },
        {
            id: 36,
            categoria: 'computadoras',
            marca: 'dell',
            nombre: 'Dell Inspiron 3020',
            estado: 'bueno',
            precio: 8999,
            descripcion: 'Reacondicionada, torre familiar. i5, 8GB RAM, SSD 512GB. Incluye teclado y mouse.',
            especificaciones: 'Procesador: Intel Core i5-13400 | RAM: 8GB DDR4 | SSD: 512GB | Windows 11 Home | Incluye periféricos',
            imagen: 'Img/dell-inspiron-3020.jpg'
        },
        {
            id: 37,
            categoria: 'computadoras',
            marca: 'lenovo',
            nombre: 'Lenovo IdeaCentre AIO 3',
            estado: 'excelente',
            precio: 10999,
            descripcion: 'Reacondicionada, todo en uno 23.8". i5, 8GB RAM, SSD 512GB. Ocupa poco espacio.',
            especificaciones: 'Pantalla: 23.8" FHD táctil | Procesador: Intel Core i5-12450H | RAM: 8GB | SSD: 512GB | Windows 11',
            imagen: 'Img/lenovo-aio3.jpg'
        },
        {
            id: 38,
            categoria: 'computadoras',
            marca: 'apple',
            nombre: 'iMac 24" M1 2021',
            estado: 'bueno',
            precio: 21999,
            descripcion: 'Reacondicionada, todo en uno. Chip M1, 8GB RAM, SSD 256GB. Pantalla 4.5K.',
            especificaciones: 'Pantalla: 24" 4.5K Retina | Chip: Apple M1 | RAM: 8GB unificada | SSD: 256GB | Magic Keyboard + Magic Mouse',
            imagen: 'Img/imac-24-m1.jpg'
        },
        {
            id: 39,
            categoria: 'computadoras',
            marca: 'dell',
            nombre: 'Dell Precision 3660',
            estado: 'regular',
            precio: 15999,
            descripcion: 'Reacondicionada, estación de trabajo. i9, 32GB RAM, SSD 1TB + HDD 2TB.',
            especificaciones: 'Procesador: Intel Core i9-12900K | RAM: 32GB DDR5 | SSD: 1TB + HDD: 2TB | NVIDIA T400 | Windows 11 Pro',
            imagen: 'Img/dell-precision-3660.jpg'
        },
        {
            id: 40,
            categoria: 'computadoras',
            marca: 'lenovo',
            nombre: 'Lenovo ThinkStation P360',
            estado: 'excelente',
            precio: 18999,
            descripcion: 'Reacondicionada, estación profesional. i7, 32GB RAM, SSD 1TB. Renderizado.',
            especificaciones: 'Procesador: Intel Core i7-12700K | RAM: 32GB DDR5 | SSD: 1TB NVMe | NVIDIA RTX A2000 | Windows 11 Pro',
            imagen: 'Img/lenovo-p360.jpg'
        }
    ];

    // ============================================
    // ELEMENTOS DEL DOM
    // ============================================
    const catalogoGrid = document.getElementById('catalogo-grid');
    const filtroCategoria = document.getElementById('filtro-categoria');
    const filtroMarca = document.getElementById('filtro-marca');
    const filtroPrecio = document.getElementById('filtro-precio');
    const filtroEstado = document.getElementById('filtro-estado');
    const btnBuscar = document.getElementById('btn-buscar');
    const btnLimpiar = document.getElementById('btn-limpiar-filtros');
    const btnMostrarTodos = document.getElementById('btn-mostrar-todos');
    const contadorSpan = document.querySelector('#contador-resultados span');
    const sinResultados = document.getElementById('sin-resultados');
    const modal = document.getElementById('modal-producto');
    const modalClose = document.querySelector('.modal-close');

    // ============================================
    // FUNCIÓN: Formatear precio a moneda
    // ============================================
    function formatearPrecio(precio) {
        return '$' + precio.toLocaleString('es-MX');
    }

    // ============================================
    // FUNCIÓN: Capitalizar primera letra
    // ============================================
    function capitalizar(texto) {
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    }

    // ============================================
    // FUNCIÓN: Obtener clase de badge según estado
    // ============================================
    function obtenerClaseBadge(estado) {
        switch (estado) {
            case 'excelente': return 'badge-excelente';
            case 'bueno': return 'badge-bueno';
            case 'regular': return 'badge-regular';
            default: return 'badge-bueno';
        }
    }

    // ============================================
    // FUNCIÓN: Crear tarjeta de producto
    // ============================================
    function crearTarjetaProducto(producto) {
        const card = document.createElement('article');
        card.className = 'producto-card';
        card.setAttribute('data-id', producto.id);
        card.setAttribute('data-categoria', producto.categoria);
        card.setAttribute('data-marca', producto.marca);
        card.setAttribute('data-precio', producto.precio);
        card.setAttribute('data-estado', producto.estado);

        card.innerHTML = `
            <div class="producto-imagen">
                <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" onerror="this.src='Img/placeholder.jpg'; this.onerror=null;">
                <span class="producto-categoria-etiqueta">${capitalizar(producto.categoria)}</span>
            </div>
            <div class="producto-detalle">
                <span class="producto-marca">${capitalizar(producto.marca)}</span>
                <h3 class="producto-nombre">${producto.nombre}</h3>
                <span class="producto-badge ${obtenerClaseBadge(producto.estado)}">${capitalizar(producto.estado)}</span>
                <p class="producto-descripcion">${producto.descripcion}</p>
                <div class="producto-footer">
                    <span class="producto-precio">${formatearPrecio(producto.precio)}</span>
                    <button class="btn-detalle" data-id="${producto.id}">Ver Detalle</button>
                </div>
            </div>
        `;

        // Evento para abrir modal al hacer clic en "Ver Detalle"
        card.querySelector('.btn-detalle').addEventListener('click', (e) => {
            e.stopPropagation();
            mostrarModal(producto);
        });

        // Evento para abrir modal al hacer clic en la tarjeta completa
        card.addEventListener('click', () => {
            mostrarModal(producto);
        });

        return card;
    }

    // ============================================
    // FUNCIÓN: Mostrar productos en el grid
    // ============================================
    function mostrarProductos(productosAMostrar) {
        catalogoGrid.innerHTML = '';

        if (productosAMostrar.length === 0) {
            catalogoGrid.style.display = 'none';
            sinResultados.style.display = 'block';
        } else {
            catalogoGrid.style.display = 'grid';
            sinResultados.style.display = 'none';

            productosAMostrar.forEach(producto => {
                const tarjeta = crearTarjetaProducto(producto);
                catalogoGrid.appendChild(tarjeta);
            });
        }

        contadorSpan.textContent = productosAMostrar.length;
    }

    // ============================================
    // FUNCIÓN: Filtrar productos
    // ============================================
    function filtrarProductos() {
        const categoria = filtroCategoria.value;
        const marca = filtroMarca.value;
        const precioMax = filtroPrecio.value;
        const estado = filtroEstado.value;

        let productosFiltrados = [...productos];

        // Filtrar por categoría
        if (categoria !== 'todos') {
            productosFiltrados = productosFiltrados.filter(p => p.categoria === categoria);
        }

        // Filtrar por marca (solo 4 marcas: samsung, apple, dell, lenovo)
        if (marca !== 'todas') {
            productosFiltrados = productosFiltrados.filter(p => p.marca === marca);
        }

        // Filtrar por precio máximo
        if (precioMax !== 'todos') {
            productosFiltrados = productosFiltrados.filter(p => p.precio <= parseInt(precioMax));
        }

        // Filtrar por estado
        if (estado !== 'todos') {
            productosFiltrados = productosFiltrados.filter(p => p.estado === estado);
        }

        mostrarProductos(productosFiltrados);
    }

    // ============================================
    // FUNCIÓN: Limpiar filtros
    // ============================================
    function limpiarFiltros() {
        filtroCategoria.value = 'todos';
        filtroMarca.value = 'todas';
        filtroPrecio.value = 'todos';
        filtroEstado.value = 'todos';
        mostrarProductos(productos);
    }

    // ============================================
    // FUNCIÓN: Mostrar modal de detalle
    // ============================================
    function mostrarModal(producto) {
        document.getElementById('modal-img').src = producto.imagen;
        document.getElementById('modal-img').alt = producto.nombre;
        document.getElementById('modal-titulo').textContent = producto.nombre;

        const badge = document.getElementById('modal-badge');
        badge.textContent = capitalizar(producto.estado);
        badge.className = 'producto-badge ' + obtenerClaseBadge(producto.estado);

        document.getElementById('modal-categoria').textContent = capitalizar(producto.categoria) + ' - ' + capitalizar(producto.marca);
        document.getElementById('modal-descripcion').textContent = producto.descripcion;
        document.getElementById('modal-especificaciones').textContent = producto.especificaciones;
        document.getElementById('modal-precio').textContent = formatearPrecio(producto.precio);

        // Configurar botones del modal
        const btnCompra = document.getElementById('btn-solicitar-compra');
        btnCompra.onclick = () => {
            alert(`Has solicitado la compra de: ${producto.nombre}\nPrecio: ${formatearPrecio(producto.precio)}\n\nTe contactaremos pronto para coordinar la entrega.`);
            cerrarModal();
        };

        const btnFavorito = document.getElementById('btn-agregar-favorito');
        btnFavorito.innerHTML = '&#10084; Agregar a Favoritos';
        btnFavorito.onclick = () => {
            btnFavorito.innerHTML = '&#10084; Agregado a Favoritos';
            btnFavorito.style.background = '#10b981';
            btnFavorito.style.color = 'white';
            setTimeout(() => {
                alert(`${producto.nombre} se ha agregado a tus favoritos.`);
            }, 300);
        };

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // ============================================
    // FUNCIÓN: Cerrar modal
    // ============================================
    function cerrarModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ============================================
    // EVENTOS
    // ============================================

    // Botón buscar
    btnBuscar.addEventListener('click', filtrarProductos);

    // Filtros automáticos al cambiar selección
    filtroCategoria.addEventListener('change', filtrarProductos);
    filtroMarca.addEventListener('change', filtrarProductos);
    filtroPrecio.addEventListener('change', filtrarProductos);
    filtroEstado.addEventListener('change', filtrarProductos);

    // Botón limpiar filtros
    btnLimpiar.addEventListener('click', limpiarFiltros);

    // Botón mostrar todos (cuando no hay resultados)
    btnMostrarTodos.addEventListener('click', limpiarFiltros);

    // Cerrar modal
    modalClose.addEventListener('click', cerrarModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            cerrarModal();
        }
    });

    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            cerrarModal();
        }
    });

    // ============================================
    // CARGA INICIAL: Mostrar todos los productos
    // ============================================
    mostrarProductos(productos);
});