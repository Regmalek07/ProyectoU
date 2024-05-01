function cargarProductos() {
    return new Promise((resolve, reject) => {
        fetch('datos.json')
            .then(response => response.json())
            .then(data => resolve(data.productos))
            .catch(error => reject(error));
    });
}

function agregarAlCarrito(idProducto) {
    cargarProductos()
        .then(productos => {
            // Buscar el producto por su ID
            var producto = productos.find(producto => producto.id === idProducto);
            
            if (producto) {
                // Obtener el carrito del almacenamiento local o crear uno nuevo si no existe
                var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
                
                // Agregar el producto al carrito
                carrito.push(producto);
                
                // Guardar el carrito actualizado en el almacenamiento local
                localStorage.setItem("carrito", JSON.stringify(carrito));
                
                // Mostrar un mensaje de confirmación al usuario
                alert("El producto se ha agregado al carrito.");
            } else {
                alert("El producto seleccionado no existe.");
            }
        })
        .catch(error => {
            console.error(error);
            alert("Ocurrió un error al cargar los productos. Por favor, inténtalo de nuevo más tarde.");
        });
}
