// Manejar el envío del formulario de registro
document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    var formData = new FormData(this); // Obtener los datos del formulario
    
    // Convertir los datos del formulario a un objeto JSON
    var jsonData = {};
    formData.forEach(function(value, key) {
        jsonData[key] = value;
    });

    // Verificar si el correo electrónico ya está registrado
    fetch('http://localhost:3000/usuarios?correo=' + encodeURIComponent(jsonData.correo))
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            // El correo electrónico ya está registrado, mostrar un mensaje de error
            alert('El correo electrónico ya está registrado.');
        } else {
            // El correo electrónico no está registrado, enviar los datos al servidor para el registro
            fetch('http://localhost:3000/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Datos de registro enviados:', data);
                // Redirigir a la página de inicio
                window.location.href = 'home.html'; // Cambiar a la URL de tu página de inicio
            })
            .catch((error) => {
                console.error('Error al enviar datos de registro:', error);
            });
        }
    })
    .catch((error) => {
        console.error('Error al verificar correo electrónico:', error);
    });
});

// Manejar el envío del formulario de inicio de sesión
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
            // Inicio de sesión exitoso, redirigir al usuario a la página de inicio
            window.location.href = 'home.html'; // Cambiar a la URL de tu página de inicio
        } else {
            // Credenciales incorrectas, mostrar un mensaje de error
            alert('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
        }
    })
    .catch((error) => {
        console.error('Error al iniciar sesión:', error);
    });
});
