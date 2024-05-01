document.addEventListener("DOMContentLoaded", function() {
    var reseñasLista = document.getElementById("reseñas-lista");

    cargarReseñas();

    var formReseña = document.getElementById("form-reseña");
    formReseña.addEventListener("submit", publicarReseña);

    function cargarReseñas() {
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.open("GET", "http://localhost:3000/datos.json", true); // Cambia la URL según la ubicación de tu servidor local
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var datos = JSON.parse(xhr.responseText);
                mostrarReseñas(datos.resenas);
            }
        };
        xhr.send();
    }

    function guardarReseñas(datos) {
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", "http://localhost:3000/datos.json", true); // Cambia la URL según la ubicación de tu servidor local
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(datos));
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

        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.open("GET", "http://localhost:3000/datos.json", true); // Cambia la URL según la ubicación de tu servidor local
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var datos = JSON.parse(xhr.responseText);
                datos.resenas.push(reseña);
                guardarReseñas(datos);
                mostrarReseñas(datos.resenas);
            }
        };
        xhr.send();
    }
});
