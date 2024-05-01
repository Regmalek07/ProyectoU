// Función para cerrar sesión
function logout() {
    // Eliminar el estado de autenticación del almacenamiento local
    localStorage.removeItem("authenticated");
    // Redirigir al usuario al inicio de sesión
    window.location.href = "home.html";
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
});