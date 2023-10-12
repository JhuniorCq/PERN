//Importar desde express a la función "Router"
const { Router } = require('express');

//Importamos la conexión a la base de datos, es decir traemos a 'pool'
const pool = require('../db');

//Para usar la función 'Router' lo asignamos a una variable
const router = Router();    //Esto nos permitirá crear nuevas URL (inicialmente está vacía)

//Exportar las Funciones que son 2dos Parámetros al crear una RUTA
const {
    obtenerTodasTareas,
    obtenerUnaTarea, 
    crearTarea, 
    eliminarTarea, 
    modificarTarea
} = require('../controllers/controller');

/* 
    - Creando una URL (Ruta) -> Estamos agregando un valor a 'roter' (el contenido de la función flecha)
    - Acá definimos nuestras RUTAS, por ejemplo '/tasks' , esto quiere decir que si accedo a http://localhost:3000/tasks -> se enviará una respuesta a esa RUTA gracias al res.send( )

*/
router.get('/tasks', obtenerTodasTareas);//Solo llamo a la función que ya se definió en controller.js

router.get('/tasks/10', obtenerUnaTarea);

router.post('/tasks', crearTarea);

router.delete('/tasks', eliminarTarea);

router.put('/tasks', modificarTarea);







//Exportamos la variable 'router' que AHORA ya NO está vacía
module.exports = router;
