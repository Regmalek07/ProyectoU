// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
    // Obtener el producto correspondiente al ID del JSON de productos
    var producto = productos.find(function (p) {
        return p.id === idProducto;
    });

    // Obtener el carrito del almacenamiento local
    var carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Agregar el producto al carrito
    carrito.push(producto);

    // Guardar el carrito actualizado en el almacenamiento local
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Alerta para indicar que el producto se ha agregado al carrito
    alert("El producto se ha agregado al carrito correctamente.");
}
