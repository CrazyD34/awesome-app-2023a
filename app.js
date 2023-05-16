//Importando express
import express from 'express';

//Crear una instancia de express
const app = express(); //Express es un middleware, incluyen (request,response)

//--16/05/23 -- Middleware de parseo de datos del cliente en urlencoded
app.use(express.urlencoded({extended: true}));

//Registrando peticion entrante
app.use( (request,response,next) => {
    console.log("Registrando peticion entrante");
    console.log(`${request.method} - ${request.url}`)
    next();
})

//Los middleware de propositos especificos se colocaran al inicio, luego los middleware genericos
app.get('/about', (request, response) => {
    response.send(`
    <h1 style="color:teal">About...</h1>
    <p>Esta es una pagina creada para aprender 
    desarrollo web en FullStack con JS</p>
    <p>Otro parrafo</p>
    `);
});

//GET /add-product
//Eliminamos lo generico de use - directamente el verbo GET POST, etc.
app.get('/add-products',(request,response,next) => {
    //Sirviendo el formulario
    //En el form se indica la ruta - metodo HTML
    //En los imput siempre hay que colocarles un name
    console.log("⏰ Sirviendo un formulario");
    response.send(`
    <form action="/add-products" method="POST">
        <label for="title">Product Title</label>
        <input type="text" name="title">
        <br>
        <label for="description">Product Description</label>
        <input type="text" name="description">
        <br>
        <button type="submit">Add Product</button>
    </form>
    `);
});

//Creando un middleware que se ejecuta con el POST a la ruta add-products
//POST /add-product
app.post('/add-products', (request,response) => {
    //Realizando una extracción de los datos del formulario anterior
    for(const prop in request.body)
    {
        //request.body[prop] = Investiga las propiedades disponibles el request en la parte del body
        console.log(`PROP: ${request.body[prop]}`);
    }
    //Redireccionamiento - Pideme esta otra pagina Al terminar se envia a el usuario a la raiz
    response.redirect('/');
});

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