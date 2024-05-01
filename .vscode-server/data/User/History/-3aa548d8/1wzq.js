// Función para mostrar los artículos del carrito
function mostrarCarrito() {
    // Obtener los datos del carrito del almacenamiento local
    var carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Limpiar el contenido del contenedor del carrito
    carritoContainer.innerHTML = "";

    // Verificar si el carrito está vacío
    if (carrito.length === 0) {
        carritoContainer.innerHTML = "<p>El carrito está vacío.</p>";
    } else {
        // Recorrer cada artículo en el carrito
        carrito.forEach(function (producto) {
            // Crear elementos HTML para mostrar la información del producto
            var productoDiv = document.createElement("div");
            productoDiv.classList.add("producto-carrito");
            productoDiv.innerHTML = `
                <img src="images/${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion}</p>
                <h3>${producto.precio}</h3>
                <button onclick="eliminarDelCarrito('${producto.id}')">Eliminar del carrito</button>
            `;

            // Modificar el tamaño de la imagen
            var imagen = productoDiv.querySelector("img");
            imagen.style.maxWidth = "150px"; // Establece el ancho máximo de la imagen

            // Agregar el producto al contenedor del carrito
            carritoContainer.appendChild(productoDiv);
        });
    }
}
