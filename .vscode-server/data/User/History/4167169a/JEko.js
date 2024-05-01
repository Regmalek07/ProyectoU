document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    var formData = new FormData(this); // Obtener los datos del formulario
    
    // Convertir los datos del formulario a un objeto JSON
    var jsonData = {};
    formData.forEach(function(value, key) {
        jsonData[key] = value;
    });

    // Verificar si el correo electrónico ya está registrado
    fetch('http://localhost:3000/datos?correo=' + encodeURIComponent(jsonData.correo))
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            alert('El correo electrónico ya está registrado.');
        } else {
            // Enviar los datos al servidor
            fetch('http://localhost:3000/datos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Datos enviados:', data);
                // Redirigir a la página de inicio
                window.location.href = 'home.html'; // Cambiar a la URL de tu página de inicio
            })
            .catch((error) => {
                console.error('Error al enviar datos:', error);
            });
        }
    })
    .catch((error) => {
        console.error('Error al verificar correo electrónico:', error);
    });
});