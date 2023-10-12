//Acá pondremos a todas las Funciones Flecha que son el Segundo Parámetro cuando se hacen las RUTAS

//Importamos la conexión a la base de datos, es decir traemos a 'pool'
const pool = require('../db');

const obtenerTodasTareas = /*async*/ (req, res) => {//Solicitud para obtener algo (response)
    res.send('Retornando una Lista de Tareas');

    /*
    //EJEMPLO PARA SOLICITAR ALGO A LA BD (SOLICITUD SQL)
    //Solicitamos una acción en la BD y la guardamos
    const result = await pool.query('SELECT NOW()');//La solicitud a la BD es asíncrona: async await
    console.log(result);
    //res.json(result.rows[0].now);//Respondemos a la solicitud del Cliente con un json*/
};

const obtenerUnaTarea = (req, res) => {    //Solicitud para Obener algo en específico (response)
    res.send('Retornando una tarea en específico');
};

const crearTarea = async (req, res) => {   //Crear algo (response)
    const {titulo, descripcion} = req.body; //Esto nos permite conocer la información que nos envía el cliente
    
    //INSERTAR DATOS en la tabla 'task' de la BD
    //Dentro de los primeros () indico los parámetros a los cuales se les dará un valor, el orden de estos parámetros coincidirá con el orden de las colummnas -> cuando los parametros tengan un valor, serán enviados a la BD
    //Luego indico los valores para cada Columna con VALUES
    // $1 y $2-> Coger valor del 1er y 2do elemento del Array, y se colocan a los parametros correspondientes
    //RETURNING * -> Esto hace que luego de la consulta me retorne a la variable 'result' todos los campos que han sido insertados
    try{
        const result = await pool.query('INSERT INTO task (titulo, descripcion) VALUES ($1, $2) RETURNING *', [
            titulo,
            descripcion
        ]);

        console.log(result);
        res.json(result.rows[0]);
        // res.send('Creando una nueva tarea');
    }
    catch(err){
        //DURANTE DESARROLLO: Enviar este mensaje para nosotros saber qué pasa
        res.json({err: err.message});
        //EN PRODUCCIÓN: Enviar un mensaje de error simple
        // throw err;
    }
};

const eliminarTarea = (req, res) => {  //Eliminar algo (response)
    res.send('Eliminando una tarea');
};

const modificarTarea = (req, res) => {   //Modificar algo (response)
    res.send('Modificando una tarea');
};

//En este archivo JS voy a EXPORTAR varias funciones, por eso haré lo siguiente:
module.exports = {
    obtenerTodasTareas: obtenerTodasTareas,
    obtenerUnaTarea: obtenerUnaTarea,
    crearTarea: crearTarea,
    eliminarTarea: eliminarTarea,
    modificarTarea: modificarTarea
}



