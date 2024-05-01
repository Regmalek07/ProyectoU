// Array para almacenar los productos en el carrito
var carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    // Buscar el producto en el catálogo por su ID
    var producto = catalogo.productos.find(function(item) {
        return item.id === id;
    });
    
    // Si el producto se encuentra, agregarlo al carrito
    if (producto) {
        carrito.push(producto);
        console.log("Producto agregado al carrito:", producto);
        // Aquí puedes llamar a una función para actualizar la visualización del carrito
    } else {
        console.log("Producto no encontrado en el catálogo.");
    }
}
