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
                "imagen": "images/portatil6.png"
            },
            // Resto de productos aquí
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
