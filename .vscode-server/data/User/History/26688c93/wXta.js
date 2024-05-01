document.addEventListener("DOMContentLoaded", function() {
    var reseñasLista = document.getElementById("reseñas-lista");
    var reseñaForm = document.getElementById("reseña-form-container");
    var publicarButton = document.getElementById("publicar-button");

    cargarReseñas();

    var formReseña = document.getElementById("form-reseña");
    formReseña.addEventListener("submit", publicarReseña);

    // Mostrar el formulario de reseña y el botón de publicar solo si el usuario está logueado
    var isAuthenticated = localStorage.getItem("authenticated");

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

    function guardarReseñas(datos) {
        fetch('http://localhost:3000/resenas', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        })
        .then(response => {
            if (response.ok) {
                console.log("Reseñas guardadas correctamente.");
            } else {
                console.error("Error al guardar las reseñas:", response.status);
            }
        })
        .catch(error => {
            console.error("Error al guardar las reseñas:", error);
        });
    }

    function mostrarReseñas(reseñas) {
        reseñasLista.innerHTML = "";

        reseñas.forEach(function(reseña) {
            var listItem = document.createElement("li");
            listItem.innerHTML = "<p><strong>" + reseña.fecha + "</strong>: " + reseña.texto + "</p>";
            reseñasLista.appendChild(listItem);
        });
    }

    function publicarReseña(event) {
        event.preventDefault();

        var reseñaText = document.getElementById("reseña-text").value;

        var reseña = {
            texto: reseñaText,
            fecha: new Date().toLocaleString()
        };

        fetch("http://localhost:3000/resenas")
        .then(response => response.json())
        .then(datos => {
            datos.resenas.push(reseña);
            guardarReseñas(datos);
            mostrarReseñas(datos.resenas);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
    }
});
