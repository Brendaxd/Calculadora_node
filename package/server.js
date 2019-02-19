//Inicialización
var express	= require('express');//se pide la libreria express que ofrese nodejs
var app	= express();//se almacena el express en la variable app
var mongoose = require('mongoose');//libreria de mongodb
var port = process.env.PORT || 8080;//establece conexion con el puerto 8080

app.configure(function(){
		app.use(express.static(__dirname + '/'));//une todos los archivos que se hagan en la carpeta, directorio
		app.use(express.logger('dev'));
		app.use(express.methodOverride());
});

var bodyParser = require('body-parser');//recibe los datos que el usuario envia
app.use(bodyParser.json({limit: '50mb'}));//limite del tamano de los datos
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

require('./routes.js')(app);//contacta al archivo routes.js

app.listen(port);//se escucha lo enviado al puerto
console.log("APP por el puerto " + port);