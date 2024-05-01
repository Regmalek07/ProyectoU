// Definir la función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
    // Obtener el JSON de productos
    var productos = {
        "productos": [
            {
                "id": "producto1",
                "nombre": "Poratil ARIPro Gf16",
                "descripcion": "Fyzen 5 5535h, 8 Ram, 512 Ssd, pantalla táctil, Ideal para diseño",
                "precio": 2759000,
                "imagen": "portatil6.png"
            },
            { 
                "id": "producto2", 
                "nombre": "Poratil Pearpro 13 2024", 
                "descripcion": "Laptop para trabajo, Chip N1, 256 GB de SSD, 8 GB de RAM", 
                "precio": 2990000, 
                "imagen": "Portatil2.png"
              },
              { 
                "id": "producto3", 
                "nombre": "Poratil Itech9 15.6'' 2023", 
                "descripcion": "Para trabajar, estudiar, Ithel 12th, 256 GB de SSD, 8 GB de RAM", 
                "precio": 1990000, 
                "imagen": "portatil3.png"
              },
              { 
                "id": "producto4", 
                "nombre": "Poratil Lectus 16 Gaming", 
                "descripcion": "Fyzen 5 7535hs 8 Ram 512 Ssd mtx 250 color negro mate", 
                "precio": 2990000, 
                "imagen": "portatil4.png"
              },
              { 
                "id": "producto5", 
                "nombre": "Poratil ARIPro Gf16", 
                "descripcion": "Ithel 5 13th 16 Ram 512 Ssd mtx 350 color negro mate", 
                "precio": 3990000, 
                "imagen": "Portatil1.png"
              },
              { 
                "id": "producto6", 
                "nombre": "Potatil Innovi Q 15.6'' Gamgin", 
                "descripcion": "Ithel 7 13th 16 Ram 512 m.2 nmve htx 450 color azul neon", 
                "precio": 4390000, 
                "imagen": "portatil5.png"
              },
              { 
                "id": "producto7", 
                "nombre": "Teclado Itech K52", 
                "descripcion": "Retroiluminado antisalpicaduras color negro", 
                "precio": 190000, 
                "imagen": "teclado1.jpg"
              },
              { 
                "id": "producto8", 
                "nombre": "Diadema Itech Ares 210", 
                "descripcion": "Con cancelación de ruido, sonido superior y sin límites", 
                "precio": 263000, 
                "imagen": "audifono1.jpg"
              },
              { 
                "id": "producto9", 
                "nombre": "Mouse Itech G110", 
                "descripcion": "RGB, 6 botones, 8000dpi color negro con acabados fuscia", 
                "precio": 153900, 
                "imagen": "mouse1.png"
              },
              { 
                "id": "producto10", 
                "nombre": "Mouse Itech Zeta3", 
                "descripcion": "6 botones, 6000dpi color negro, agarre antideslizante", 
                "precio": 989000, 
                "imagen": "mouse2.png"
              },
              { 
                "id": "producto11", 
                "nombre": "Teclado Irsat Z310", 
                "descripcion": "Teclado 70%, Retroiluminado Rgb, Conexion Usb C", 
                "precio": 240000, 
                "imagen": "teclado2.png"
              },
              { 
                "id": "producto12", 
                "nombre": "Diadema JBlues", 
                "descripcion": "Canceclacion de ruido, Conexión BT, jJack 3.0", 
                "precio": 372000, 
                "imagen": "audifono2.png"
              },
              { 
                "id": "producto13", 
                "nombre": "Silla V5 Cold Ergnomic", 
                "descripcion": "Confortable y duradera, apoyabrazos ajustables", 
                "precio": 1990000, 
                "imagen": "silla3.png"
              },
              { 
                "id": "producto14", 
                "nombre": "Silla Ergonómica SecretWork", 
                "descripcion": "Con sistema ergonomico y mejora de postura", 
                "precio": 990000, 
                "imagen": "silla2.png"
              },
              { 
                "id": "producto15", 
                "nombre": "Silla Gamer Anubis V201", 
                "descripcion": "Ergonómica y confiable, comodidad en todo momento", 
                "precio": 1310000, 
                "imagen": "silla1.png"
              }
        ]
    };

    // Buscar el producto por su ID en el JSON
    var productoSeleccionado = productos.productos.find(function(producto) {
        return producto.id === idProducto;
    });

    // Verificar si se encontró el producto
    if (productoSeleccionado) {
        // Obtener el carrito del almacenamiento local o crear uno vacío si no existe
        var carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        // Agregar el producto al carrito
        carrito.push(productoSeleccionado);

        // Guardar el carrito actualizado en el almacenamiento local
        localStorage.setItem("carrito", JSON.stringify(carrito));

        // Notificar al usuario que el producto se agregó al carrito
        alert("El producto se ha agregado al carrito correctamente.");
    } else {
        // Notificar al usuario si no se encontró el producto
        alert("El producto seleccionado no está disponible.");
    }
}
