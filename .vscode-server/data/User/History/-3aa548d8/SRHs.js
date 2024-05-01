// carrito.js

let carrito = [];

function agregarAlCarrito(idProducto) {
    // Obtener información del producto
    let producto = document.getElementById(idProducto);
    let nombre = producto.querySelector('h2').textContent;
    let precio = producto.querySelector('h2').textContent;
    // Añadir el producto al carrito
    carrito.push({ nombre: nombre, precio: precio });
    // Actualizar la interfaz del carrito
    actualizarCarrito();
}

function actualizarCarrito() {
    // Limpiar el contenido actual del carrito
    let carritoElement = document.getElementById('carrito');
    carritoElement.innerHTML = '';
    // Añadir cada producto al carrito
    carrito.forEach(function (producto) {
        let item = document.createElement('li');
        item.textContent = `${producto.nombre} - ${producto.precio}`;
        carritoElement.appendChild(item);
    });
    // Actualizar el total del carrito
    actualizarTotal();
}

function actualizarTotal() {
    let totalElement = document.getElementById('total');
    let total = 0;
    carrito.forEach(function (producto) {
        total += parseFloat(producto.precio);
    });
    totalElement.textContent = `$${total.toFixed(2)}`;
}
