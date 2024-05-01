// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
    // Obtener información del producto según su ID
    var producto = obtenerProductoPorId(idProducto);
    
    if (producto) {
        // Obtener el carrito del almacenamiento local o crear uno nuevo si no existe
        var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        
        // Agregar el producto al carrito
        carrito.push(producto);
        
        // Guardar el carrito actualizado en el almacenamiento local
        localStorage.setItem("carrito", JSON.stringify(carrito));
        
        // Opcional: Mostrar un mensaje de confirmación al usuario
        alert("El producto se ha agregado al carrito.");
    } else {
        alert("El producto seleccionado no existe.");
    }
}

// Función para obtener información del producto por su ID
function obtenerProductoPorId(idProducto) {
    // Aquí debes implementar la lógica para obtener la información del producto
    // Puede ser que tengas un arreglo de productos en JavaScript o que hagas una
    // petición a un servidor para obtener los detalles del producto.
    // Por ejemplo, puedes buscar el producto en el archivo datos.json y retornar sus detalles.

    // Aquí un ejemplo básico:
    var productos = [
        { 
            id: "producto1", 
            nombre: "Poratil ARIPro Gf16", 
            descripcion: "Fyzen 5 5535h, 8 Ram, 512 Ssd, pantalla táctil, Ideal para diseño", 
            precio: 2759000, 
            imagen: "images/portatil6.png"
        },
        { 
            id: "producto2", 
            nombre: "Poratil Pearpro 13 2024", 
            descripcion: "Laptop para trabajo, Chip N1, 256 GB de SSD, 8 GB de RAM", 
            precio: 2990000, 
            imagen: "images/Portatil2.png"
        },
        // Debes tener tus productos aquí con su respectiva información
        // Ejemplo: { id: "producto1", nombre: "Nombre del producto", descripcion: "Descripción del producto", precio: 1000, imagen: "ruta/a/la/imagen.png" }
    ];

    // Buscar el producto por su ID
    var productoEncontrado = productos.find(function(producto) {
        return producto.id === idProducto;
    });

    return productoEncontrado;
}
