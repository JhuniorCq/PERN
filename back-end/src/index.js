//Importar express
const express = require('express');

//Importar morgan
const morgan = require('morgan');

//Importar archivo 'routes.js' -> y se Importará la varible 'router' exportada en 'route.js'
const routes = require('./routes/routes');

//Ejecutar express y guardarlo en 'app'
const app = express();

//Defino un puerto
const port = 3000;

//Usando morgan para que nos aparezca por Consola el tipo de Solicitud que estamos recibiendo desde el Cliente
app.use(morgan('dev'));

//Con esto haremos que nuestro servidor de express entienda las peticiones JSON (Convertirá las peticiones JSON en Objetos de JS)
//(Esto tiene que estar ANTES de la Función para manejar las RUTAS)
app.use(express.json());

//Usando a la variable Importada 'routes' -> Contiene el valor agregado en 'routes.js'
app.use(routes);

//Esto es para iniciar el servidor web y escuchar las Solicitudes entrantes por el Puerto
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});