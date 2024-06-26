// Función para cerrar sesión
function logout() {
    // Eliminar el estado de autenticación del almacenamiento local
    localStorage.removeItem("authenticated");
    // Redirigir al usuario al inicio de sesión
    window.location.href = "inicio_sesion.html";
}
document.addEventListener("DOMContentLoaded", function() {
    // Verificar el estado de autenticación al cargar la página
    var isAuthenticated = localStorage.getItem("authenticated");

    if (isAuthenticated) {
        // Si el usuario está autenticado, mostrar el botón de cierre de sesión
        document.getElementById("logout-button").style.display = "block";
    } else {
        // Si el usuario no está autenticado, ocultar el botón de cierre de sesión
        document.getElementById("logout-button").style.display = "none";
    }

    var btnIngresar = document.getElementById("btIngresar");

    if (isAuthenticated) {
        // Si el usuario está autenticado, ocultar el botón de Ingresar
        btIngresar.style.display = "none";
    } else {
        // Si el usuario no está autenticado, mostrar el botón de Ingresar
        btIngresar.style.display = "block";
    }
    
    var btnCarrito = document.getElementById("btCarrito");

    if (isAuthenticated) {
        // Si el usuario está autenticado, ocultar el botón de Ingresar
        btCarrito.style.display = "block";
    } else {
        // Si el usuario no está autenticado, mostrar el botón de Ingresar
        btCarrito.style.display = "none";
    }
});

