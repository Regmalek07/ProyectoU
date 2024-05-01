// Función para cargar los productos desde el archivo JSON
function cargarProductos() {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/compras", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText);
                    resolve(data.compras); // Accede al array de productos dentro del JSON
                } else {
                    reject("Error al cargar los productos.");
                }
            }
        };
        xhr.send();
    });
}

// Función para agregar un producto al carrito
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
