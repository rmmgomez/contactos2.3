/*
Aplicación estructurada en carpetas para una API REST completa sobre
contactos, restaurantes y mascotas
*/

// Librerías
const express = require('express');
const mongoose = require('mongoose');

// Enrutadores
const mascotas = require(__dirname + '/routes/mascotas');
const restaurantes = require(__dirname + '/routes/restaurantes');
const contactos = require(__dirname + '/routes/contactos');

// Quitamos el warning de mongo
mongoose.set('strictQuery', true);
// Conexión con la BD
mongoose.connect('mongodb://mongodb:27017/contactos');

// Servidor Express
let app = express();

// Middleware para peticiones POST y PUT
// Enrutadores para cada grupo de rutas
app.use(express.json());
app.use('/mascotas', mascotas);
app.use('/restaurantes', restaurantes);
app.use('/contactos', contactos);

// Puesta en marcha del servidor
app.listen(8080);