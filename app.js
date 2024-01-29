// CommonJS, ES6 con los imports
const express = require('express'); // CommonJS
const expressLayouts = require('express-ejs-layouts');
const app = express();

// Establecer EJS como template engine (motor de plantillas)
app.set('view engine', 'ejs');
// Requerir Rutas
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
// Requerir Rutas
// localhost:3000
app.use('/', indexRouter);
// http://localhost:3000/users/
// http://localhost:3000/users
app.use('/users', usersRouter)


// Configurar lo que son los layouts


// Iniciar el Servidor
app.listen(3000, () => {
  console.log('Servidor ejecutandose en http://localhost:3000');
});
