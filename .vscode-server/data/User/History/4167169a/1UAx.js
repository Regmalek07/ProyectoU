const express = require('express');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const bcrypt = require('bcrypt');

const app = express();
const router = jsonServer.router('dataBase.json');
const middlewares = jsonServer.defaults();

app.use(bodyParser.json());
app.use(middlewares);

// Ruta para manejar el registro de usuarios
app.post('/register', (req, res) => {
  const { nombre, telefono, correo, contrasena, direccion } = req.body;

  // Cifrar la contraseña antes de almacenarla
  bcrypt.hash(contrasena, 10, function(err, hash) {
    // Almacenar el usuario en la base de datos
    const nuevoUsuario = { nombre, telefono, correo, contrasena: hash, direccion };
    router.db.get('users').push(nuevoUsuario).write();

    res.json({ mensaje: 'Usuario registrado exitosamente' });
  });
});

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en el puerto ${PORT}`);
});
