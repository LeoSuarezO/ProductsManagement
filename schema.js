var mysql = require('mysql');
var conexion= mysql.createConnection({
    host : 'localhost',
    database : 'api_products',
    user : 'root',
    password : '0524',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});