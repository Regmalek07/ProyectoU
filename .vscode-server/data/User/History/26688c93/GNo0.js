// Función para cargar los datos del archivo JSON
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

// Función para guardar los datos en el archivo JSON
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

    // Cargar los datos del archivo JSON
    cargarDatos(function(datos) {
        // Agregar la nueva reseña a la lista de reseñas en los datos cargados
        datos.resenas.push(reseña);
        
        // Guardar los datos actualizados en el archivo JSON
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
    // Mostrar el formulario de reseña y el botón de publicar solo si el usuario está logueado (supongamos que esta lógica ya está implementada)
    var isAuthenticated = localStorage.getItem("authenticated");

    // Mostrar el formulario de reseña y el botón de publicar solo si el usuario está logueado
    var reseñaForm = document.getElementById("reseña-form-container");
    var publicarButton = document.getElementById("publicar-button");

    if (isAuthenticated) {
        reseñaForm.style.display = "block";
        publicarButton.style.display = "block";
    } else {
        reseñaForm.style.display = "none";
        publicarButton.style.display = "none";
    }

    // Cargar los datos del archivo JSON y mostrar las reseñas
    cargarDatos(function(datos) {
        mostrarReseñas(datos.resenas);
    });

    // Agregar el evento submit al formulario para publicar una reseña
    var formReseña = document.getElementById("form-reseña");
    formReseña.addEventListener("submit", publicarReseña);
});

