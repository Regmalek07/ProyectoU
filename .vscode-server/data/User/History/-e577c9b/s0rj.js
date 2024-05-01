/*
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

*/
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    var formData = new FormData(this); // Obtener los datos del formulario

    // Convertir los datos del formulario a un objeto JSON
    var jsonData = {};
    formData.forEach(function(value, key) {
        jsonData[key] = value;
    });

    // Enviar los datos de inicio de sesión al servidor
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.authenticated) {
            // Guardar información de autenticación en el almacenamiento local
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("authenticated", "true");

            // Redirigir a la página de catálogo
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