document.addEventListener("DOMContentLoaded", function() {
    // Función para verificar si el usuario está autenticado
    function isAuthenticated() {
        return localStorage.getItem("authenticated");
    }

    // Función para cerrar sesión
    function logout() {
        localStorage.removeItem("authenticated");
        // Redirigir a la página de inicio de sesión
        window.location.href = "inicio_sesion.html";
    }

    // Función para publicar una reseña
    document.getElementById("form-resena").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        var resenaText = document.getElementById("resena-text").value;

        if (!isAuthenticated()) {
            alert("Debe iniciar sesión para publicar una reseña.");
            return;
        }

        var usuario = localStorage.getItem("nombreUsuario");

        var nuevaResena = {
            usuario: usuario,
            resena: resenaText
        };

        fetch("http://localhost:3000/resenas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevaResena)
        })
        .then(response => response.json())
        .then(data => {
            alert("¡Reseña publicada exitosamente!");
            document.getElementById("resena-text").value = "";
            fetchResenas();
        })
        .catch(error => {
            console.error("Error al publicar la reseña:", error);
        });
    });

    // Función para cargar las reseñas desde el servidor
    function fetchResenas() {
        fetch("http://localhost:3000/resenas")
        .then(response => response.json())
        .then(data => {
            var resenasLista = document.getElementById("resenas-lista");
            resenasLista.innerHTML = ""; // Limpiar la lista antes de agregar las nuevas reseñas
            data.forEach(resena => {
                var listItem = document.createElement("li");
                listItem.textContent = `${resena.usuario}: ${resena.resena}`;
                resenasLista.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error al obtener las reseñas:", error);
        });
    }

    // Verificar el estado de autenticación al cargar la página
    if (isAuthenticated()) {
        document.getElementById("logout-button").style.display = "block";
        document.getElementById("resena-form-container").style.display = "block";
    } else {
        document.getElementById("btIngresar").style.display = "block";
    }

    // Evento para cerrar sesión
    document.getElementById("logout-button").addEventListener("click", logout);

    // Cargar las reseñas al cargar la página
    fetchResenas();
});
