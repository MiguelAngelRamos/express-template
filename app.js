// CommonJS, ES6 con los imports
const express = require('express'); // CommonJS
const app = express();
// Requerir Rutas
const indexRouter = require('./routes/index');

// Requerir Rutas



// Configurar lo que son los layouts


// Iniciar el Servidor
app.listen(3000, () => {
  console.log('Servidor ejecutandose en http://localhost:3000');
});
