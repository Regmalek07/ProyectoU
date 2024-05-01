function cargarProductos() {
    return new Promise((resolve, reject) => {
        // Realizar una solicitud para cargar el archivo JSON de productos
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.open("GET", "productos.json", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Parsear el JSON de productos y resolver la promesa con los datos
                    resolve(JSON.parse(xhr.responseText).productos);
                } else {
                    // Rechazar la promesa con un mensaje de error si la solicitud falla
                    reject("Error al cargar los productos.");
                }
            }
        };
        xhr.send();
    });
}
