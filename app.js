//Importando el modulo http
import http from 'http';
//Importando express
import express from 'express';

//Crear una instancia de express
const app = express(); //Express es un midlewear, incluyen (request,response)

//Creando el servidor
const server = http.createServer(app);

//Definir puertos
const port = 3000;
const ip = "0.0.0.0";

//Arrancado el servidor
server.listen(port,ip, (err) => {
    console.log("👂 Sirviendo en http://localhost:3000");
    //console.log("👂 Sirviendo en http://${process.env.IP}:${process.env.PORT}");
})