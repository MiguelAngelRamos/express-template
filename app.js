// CommonJS, ES6 con los imports
const express = require('express'); // CommonJS
const expressLayouts = require('express-ejs-layouts');
const app = express();

// Requerir Rutas
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Establecer EJS como template engine (motor de plantillas)
app.set('view engine', 'ejs');

// Configurar el express-ejs-layouts
app.use(expressLayouts); // Aseguramos que este layout venga antes de cualquier app.use('/')
app.set('layout', 'layouts/layout');
// localhost:3000
app.use('/', indexRouter);
// http://localhost:3000/users/
// http://localhost:3000/users
app.use('/users', usersRouter)


// Configurar lo que son los layouts

//* El path de los estaticos http://localhost:3000/public
// Estaticos
app.use('/public', express.static('public'));

// Iniciar el Servidor
app.listen(3000, () => {
  console.log('Servidor ejecutandose en http://localhost:3000');
});
