// Obtener el contenedor del carrito
var carritoContainer = document.getElementById("carrito-container");
// Obtener la referencia al contenedor de productos
var carritoContainer = document.getElementById("carrito-container");

// Iterar sobre los productos en el carrito
carrito.forEach(function(producto) {
    // Crear un elemento de imagen
    var imagen = document.createElement("img");
    // Establecer la ruta de la imagen
    imagen.src = producto.imagen;
    // Añadir una clase para aplicar estilos CSS si es necesario
    imagen.classList.add("imagen-producto");
    // Agregar el producto al contenedor
    carritoContainer.appendChild(imagen);
    });
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

            // Agregar el producto al contenedor del carrito
            carritoContainer.appendChild(productoDiv);
        });
    }
}

// Función para eliminar un artículo del carrito
function eliminarDelCarrito(idProducto) {
    // Obtener el carrito del almacenamiento local
    var carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Filtrar el carrito para excluir el producto con el ID dado
    var nuevoCarrito = carrito.filter(function (producto) {
        return producto.id !== idProducto;
    });

    // Guardar el nuevo carrito en el almacenamiento local
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));

    // Actualizar la visualización del carrito
    mostrarCarrito();
}

// Llamar a la función mostrarCarrito cuando la página se cargue
document.addEventListener("DOMContentLoaded", mostrarCarrito);
