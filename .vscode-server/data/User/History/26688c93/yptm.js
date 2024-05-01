document.addEventListener("DOMContentLoaded", function() {
    var reseñasLista = document.getElementById("reseñas-lista");
    var reseñaForm = document.getElementById("reseña-form-container");
    var publicarButton = document.getElementById("publicar-button");

    cargarReseñas();

    var formReseña = document.getElementById("form-reseña");
    formReseña.addEventListener("submit", publicarReseña);

    function cargarReseñas() {
        fetch('http://localhost:3000/resenas')
        .then(response => response.json())
        .then(datos => {
            mostrarReseñas(datos.resenas);
        })
        .catch(error => {
            console.error('Error al cargar las reseñas:', error);
        });
    }

    function guardarReseña(reseña) {
        fetch('http://localhost:3000/resenas', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reseña)
        })
        .then(response => {
            if (response.ok) {
                console.log("Reseña guardada correctamente.");
                return response.json(); // Devolver la respuesta JSON
            } else {
                throw new Error("Error al guardar la reseña:", response.status);
            }
        })
        .then(nuevaReseña => {
            // Agregar la nueva reseña al DOM
            mostrarReseña(nuevaReseña);
        })
        .catch(error => {
            console.error(error);
        });
    }

    function mostrarReseñas(reseñas) {
        reseñasLista.innerHTML = "";

        reseñas.forEach(function(reseña) {
            mostrarReseña(reseña);
        });
    }

    function mostrarReseña(reseña) {
        var listItem = document.createElement("li");
        listItem.innerHTML = "<p><strong>" + reseña.fecha + "</strong>: " + reseña.texto + "</p>";
        reseñasLista.appendChild(listItem);
    }

    function publicarReseña(event) {
        event.preventDefault();

        var reseñaText = document.getElementById("reseña-text").value;

        var nuevaReseña = {
            texto: reseñaText,
            fecha: new Date().toLocaleString()
        };

        guardarReseña(nuevaReseña);
    }
});
