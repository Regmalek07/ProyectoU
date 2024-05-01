// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    console.log("Intentando agregar producto al carrito:", id);
    // Realizar una solicitud GET al servidor JSON para obtener los productos
    fetch('http://localhost:3000/productos')
    .then(response => response.json())
    .then(data => {
        // Buscar el producto por su ID en la respuesta JSON
        var producto = data.find(item => item.id === id);

        // Si el producto se encuentra, agregarlo al carrito
        if (producto) {
            carrito.push(producto);
            console.log("Producto agregado al carrito:", producto);
            // Aquí puedes llamar a una función para actualizar la visualización del carrito
        } else {
            console.log("Producto no encontrado en el catálogo.");
        }
    })
    .catch(error => console.error('Error al obtener productos:', error));
}
