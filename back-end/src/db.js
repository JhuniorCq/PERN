//Importmaos el módulo 'pg' para la BD PostgreSQL
const {Pool} = require('pg');   //Del módulo 'pg' solo traemos a la Clase Pool


//CONEXIÓN A LA BASE DE DATOS (en vez de pool puedo poner db también)
//El Objeto 'pool' es un Objeto que usaremos para realizar las Consultas a la BD
const pool = new Pool({ //Dentro de los () va un Objeto para Configurar a qué BD me conectaré
    user: 'postgres',
    password: 'jhuniorcq',
    host: 'localhost',
    port: 5432,
    database: 'taskdb'//Esta debe estar creada en PostgreSQL
});

module.exports = pool;
