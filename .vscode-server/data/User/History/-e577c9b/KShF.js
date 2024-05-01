document.addEventListener("DOMContentLoaded", function() {
    // Verificar el estado de autenticación al cargar la página
    var isAuthenticated = localStorage.getItem("authenticated");

    if (isAuthenticated) {
        // Si el usuario no está autenticado, redirigir al inicio de sesión
        window.location.href = "catalogo.html";
        document.getElementById("logout-button").style.display = "block";
    } else {
        // Si el usuario no está autenticado, ocultar el botón de cierre de sesión
        document.getElementById("logout-button").style.display = "none";
    }
});
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    var formData = new FormData(this); // Obtener los datos del formulario
    
    // Convertir los datos del formulario a un objeto JSON
    var jsonData = {};
    formData.forEach(function(value, key) {
        jsonData[key] = value;
    });

    // Enviar los datos de inicio de sesión al servidor
    fetch('http://localhost:3000/usuarios?correo=' + encodeURIComponent(jsonData.correo) + '&contrasena=' + encodeURIComponent(jsonData.contrasena))
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            // Usuario autenticado, guardar estado de autenticación
            localStorage.setItem("authenticated", "true");
            // Usuario autenticado, redirigir a la página de catálogo
            window.location.href = 'catalogo.html'; // Cambiar a la URL de tu página de catálogo
        } else {
            // Credenciales incorrectas, mostrar un mensaje de error
            alert('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
        }
    })
    .catch((error) => {
        console.error('Error al iniciar sesión:', error);
    });
});

