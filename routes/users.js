const express = require('express');
// importa el modulo fs para operaciones con archivos
const fs = require('fs');

// Crear un router para manejar rutas con express
const router = express.Router();

// require (req), response (res)
router.get('/', (req, res) => {
  fs.readFile('./data/users.json', (err, data) => {
    if(err) {
      res.status(500).send('Error al leer el archivo');
      return;
    }
    const users = JSON.parse(data);

    // Renderiza a la vista 'users'
    // res.render('users', { users, layout: 'layouts/layout'});
    res.render('users', { users: users, layout: 'layouts/layout'});
  });
});

module.exports = router;