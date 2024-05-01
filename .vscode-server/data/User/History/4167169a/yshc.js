document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    var formData = new FormData(this); // Obtener los datos del formulario
    
    // Convertir los datos del formulario a un objeto JSON
    var jsonData = {};
    formData.forEach(function(value, key) {
        jsonData[key] = value;
    });

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
        // Puedes realizar acciones adicionales aquí si es necesario
    })
    .catch((error) => {
        console.error('Error al enviar datos:', error);
    });
});