// Definir la función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
    // Realizar una solicitud para cargar el archivo JSON de productos
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", "productos.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Parsear el JSON de productos
            var productos = JSON.parse(xhr.responseText);

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
    };
    xhr.send();
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
