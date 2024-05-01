// Función para cargar los datos del archivo JSON local
function cargarDatos(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", "datos.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var datos = JSON.parse(xhr.responseText);
            callback(datos);
        }
    };
    xhr.send(null);
}

// Función para guardar los datos en el archivo JSON local
function guardarDatos(datos) {
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", "datos.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(datos));
}

// Función para publicar una reseña
function publicarReseña(event) {
    event.preventDefault(); // Evitar que el formulario se envíe normalmente
    
    var reseñaText = document.getElementById("reseña-text").value;
    if (reseñaText.trim() === "") {
        alert("Por favor, escribe tu reseña antes de publicar.");
        return;
    }

    // Crear un objeto de reseña con la fecha actual
    var reseña = {
        texto: reseñaText,
        fecha: new Date().toLocaleString()
    };

    // Obtener los datos del servidor
    obtenerDatos(function(datos) {
        // Agregar la nueva reseña a la lista de reseñas en los datos obtenidos
        datos.resenas.push(reseña);
        
        // Guardar los datos actualizados en el servidor
        guardarDatos(datos);

        // Actualizar la lista de reseñas en la interfaz
        mostrarReseñas(datos.resenas);
    });

    // Limpiar el textarea después de publicar la reseña
    document.getElementById("reseña-text").value = "";
}


// Función para mostrar las reseñas
function mostrarReseñas(reseñas) {
    var reseñasLista = document.getElementById("reseñas-lista");
    reseñasLista.innerHTML = ""; // Limpiar la lista antes de mostrar las reseñas

    reseñas.forEach(function(reseña) {
        var listItem = document.createElement("li");
        listItem.innerHTML = "<p><strong>" + reseña.fecha + "</strong>: " + reseña.texto + "</p>";
        reseñasLista.appendChild(listItem);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Mostrar el formulario de reseña y el botón de publicar solo si el usuario está logueado
    var isAuthenticated = localStorage.getItem("authenticated");

    // Mostrar el formulario de reseña y el botón de publicar solo si el usuario está logueado
    var reseñaForm = document.getElementById("reseña-form-container");
    var publicarButton = document.getElementById("publicar-button");

    if (isAuthenticated) {
        reseñaForm.style.display = "block";
        publicarButton.style.display = "block";

        // Mostrar el nombre del usuario logueado
        var usuarioLogueado = localStorage.getItem("nombreUsuario");
        if (usuarioLogueado) {
            var nombreUsuarioElement = document.createElement("p");
            nombreUsuarioElement.textContent = "¡Bienvenido, " + usuarioLogueado + "!";
            document.body.insertBefore(nombreUsuarioElement, document.body.firstChild);
        }
    } else {
        reseñaForm.style.display = "none";
        publicarButton.style.display = "none";
    }

    // Cargar los datos del almacenamiento local y mostrar las reseñas
    cargarDatos(function(datos) {
        mostrarReseñas(datos.resenas);
    });

    // Agregar el evento submit al formulario para publicar una reseña
    var formReseña = document.getElementById("form-reseña");
    formReseña.addEventListener("submit", publicarReseña);
});
