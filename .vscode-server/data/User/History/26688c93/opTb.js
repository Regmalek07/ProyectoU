/*
document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el usuario está logueado
    var isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated) {
        document.getElementById('logout-button').style.display = 'block';
        document.getElementById('btIngresar').style.display = 'none';
        document.getElementById('reseña-form-container').style.display = 'block';
    } else {
        document.getElementById('logout-button').style.display = 'none';
        document.getElementById('btIngresar').style.display = 'block';
        document.getElementById('reseña-form-container').style.display = 'none';
    }

    // Obtener reseñas existentes del servidor
    fetch('http://localhost:3000/resenas')
    .then(response => response.json())
    .then(data => {
        var reseñasLista = document.getElementById('reseñas-lista');
        reseñasLista.innerHTML = ''; // Limpiar la lista antes de agregar nuevas reseñas
        data.forEach(function(reseña) {
            var li = document.createElement('li');
            var contenidoReseña = document.createElement('div');
            var fechaReseña = document.createElement('div');
            
            contenidoReseña.textContent = reseña.reseña; // Usar el campo 'reseña' en lugar de 'texto'
            fechaReseña.textContent = 'Fecha: ' + reseña.fecha; // Mostrar la fecha de la reseña
            
            li.appendChild(contenidoReseña);
            li.appendChild(fechaReseña);
            
            reseñasLista.appendChild(li);
        });
    })
    .catch(error => console.error('Error al obtener reseñas:', error));

    // Manejar envío de reseña
    document.getElementById('form-reseña').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Verificar si el usuario está logueado
        var isAuthenticated = localStorage.getItem('authenticated');
        if (!isAuthenticated) {
            alert('Debe iniciar sesión para publicar una reseña.');
            return;
        }

        var formData = new FormData(this); // Obtener los datos del formulario

        // Convertir los datos del formulario a un objeto JSON
        var jsonData = {};
        formData.forEach(function(value, key) {
            jsonData[key] = value;
        });

        // Agregar la fecha actual al objeto JSON
        var fechaActual = new Date().toISOString().split('T')[0]; // Obtener la fecha actual en formato ISO (AAAA-MM-DD)
        jsonData['fecha'] = fechaActual;

        // Obtener el nombre de usuario desde localStorage
        var nombreUsuario = localStorage.getItem('nombreUsuario');
        if (nombreUsuario) {
            jsonData['usuario'] = nombreUsuario;
        }

        // Enviar reseña al servidor
        fetch('http://localhost:3000/resenas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
        .then(response => {
            if (response.ok) {
                alert('Reseña publicada correctamente.');
                // Recargar la página para mostrar la nueva reseña
                window.location.reload();
            } else {
                alert('Error al publicar la reseña. Inténtelo de nuevo.');
            }
        })
        .catch(error => console.error('Error al enviar reseña:', error));
    });
    
    // Manejar cierre de sesión
    document.getElementById('logout-button').addEventListener('click', function() {
        // Limpiar el estado de autenticación
        localStorage.removeItem('authenticated');
        // Redirigir a la página de inicio de sesión
        window.location.href = 'inicio_sesion.html';
    });
});

*/

document.addEventListener("DOMContentLoaded", function() {
    // Verificar si el usuario está logueado
    var isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated) {
        document.getElementById('logout-button').style.display = 'block';
        document.getElementById('btIngresar').style.display = 'none';
        document.getElementById('reseña-form-container').style.display = 'block';
    } else {
        document.getElementById('logout-button').style.display = 'none';
        document.getElementById('btIngresar').style.display = 'block';
        document.getElementById('reseña-form-container').style.display = 'none';
    }

    // Obtener reseñas existentes del servidor
    fetch('http://localhost:3000/resenas')
    .then(response => response.json())
    .then(data => {
        var reseñasLista = document.getElementById('reseñas-lista');
        reseñasLista.innerHTML = ''; // Limpiar la lista antes de agregar nuevas reseñas
        data.forEach(function(reseña) {
            var li = document.createElement('li');
            var contenidoReseña = document.createElement('div');
            var fechaReseña = document.createElement('div');
            var usuarioReseña = document.createElement('div'); // Nuevo elemento para mostrar el usuario
            
            contenidoReseña.textContent = reseña.reseña; // Usar el campo 'reseña' en lugar de 'texto'
            fechaReseña.textContent = 'Fecha: ' + reseña.fecha; // Mostrar la fecha de la reseña
            usuarioReseña.textContent = 'Usuario: ' + reseña.usuario; // Mostrar el usuario de la reseña
            
            li.appendChild(contenidoReseña);
            li.appendChild(fechaReseña);
            li.appendChild(usuarioReseña); // Agregar el elemento de usuario a la lista
            
            reseñasLista.appendChild(li);
        });
    })
    .catch(error => console.error('Error al obtener reseñas:', error));

    // Manejar envío de reseña
    document.getElementById('form-reseña').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Verificar si el usuario está logueado
        var isAuthenticated = localStorage.getItem('authenticated');
        if (!isAuthenticated) {
            alert('Debe iniciar sesión para publicar una reseña.');
            return;
        }

        var formData = new FormData(this); // Obtener los datos del formulario

        // Convertir los datos del formulario a un objeto JSON
        var jsonData = {};
        formData.forEach(function(value, key) {
            jsonData[key] = value;
        });

        // Agregar la fecha actual al objeto JSON
        var fechaActual = new Date().toISOString().split('T')[0]; // Obtener la fecha actual en formato ISO (AAAA-MM-DD)
        jsonData['fecha'] = fechaActual;

        // Obtener el nombre de usuario desde localStorage
        var nombreUsuario = localStorage.getItem('nombreUsuario');
        if (nombreUsuario) {
            jsonData['usuario'] = nombreUsuario;
        }

        // Enviar reseña al servidor
        fetch('http://localhost:3000/resenas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
        .then(response => {
            if (response.ok) {
                alert('Reseña publicada correctamente.');
                // Recargar la página para mostrar la nueva reseña
                window.location.reload();
            } else {
                alert('Error al publicar la reseña. Inténtelo de nuevo.');
            }
        })
        .catch(error => console.error('Error al enviar reseña:', error));
    });
    
    // Manejar cierre de sesión
    document.getElementById('logout-button').addEventListener('click', function() {
        // Limpiar el estado de autenticación
        localStorage.removeItem('authenticated');
        // Redirigir a la página de inicio de sesión
        window.location.href = 'inicio_sesion.html';
    });
});
