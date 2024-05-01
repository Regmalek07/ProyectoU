const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para analizar los cuerpos de las solicitudes en formato JSON
app.use(bodyParser.json());

// Ruta para manejar el registro de usuarios
app.post('/register', (req, res) => {
  const { nombre, telefono, correo, contrasena, direccion } = req.body;

  // Cifrar la contraseña antes de almacenarla
  bcrypt.hash(contrasena, 10, function(err, hash) {
    // Almacenar el usuario en la base de datos (puedes reemplazar esta parte con tu lógica de almacenamiento)
    const nuevoUsuario = { nombre, telefono, correo, contrasena: hash, direccion };
    console.log('Usuario registrado:', nuevoUsuario);

    res.json({ mensaje: 'Usuario registrado exitosamente' });
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en el puerto ${PORT}`);
});
