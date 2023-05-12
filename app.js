//Importando express
import express from 'express';

//Crear una instancia de express
const app = express(); //Express es un middleware, incluyen (request,response)

//Registrando el primer middleware con una funcion

app.use((request,response,next) => {
    console.log("Este es el primer middleware");
    next();
});

app.use( (request,response,next) => {
    console.log("Registrando peticion entrante");
    console.log(`${request.method} - ${request.url}`)
    next();
})

//Respondiendo al cliente
app.use( (request,response) => {
    response.send(`
    <html>
    <body>
    <h1>Welcome to Express</h1>
    <p>This is my awesome app ⭐</p>
    </body>
    </html>
    `);
})

//Definir puertos
const port = 3000;
const ip = "0.0.0.0";

//Creando el servidor utilizando express y ejecutandolo
app.listen(port,ip, (err) => {
    console.log("👂 Sirviendo en http://localhost:3000");
    //console.log("👂 Sirviendo en http://${process.env.IP}:${process.env.PORT}");
})