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
            // El correo electrónico ya está registrado, mostrar mensaje de error
            alert('El correo electrónico ya está registrado.');
        } else {
            // El correo electrónico no está registrado, enviar datos al servidor para el registro
            fetch('http://localhost:3000/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            })
            .then(response => response.json())
            .then(data => {
                alert('¡Registro completado!');
                // Redirigir a la página de inicio
                window.location.href = 'home.html';
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