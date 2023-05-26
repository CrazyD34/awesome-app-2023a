//Importando express
import express from 'express';

//Importando en enrutador creado
import adminRoute from './routes/admin.routes.js';
import shopRoute from './routes/shop.routes.js';

//Importando root directory
//El servidor de estaticos es el primer middleware a ejecutar
import { ROOT_DIR } from './helpers/paths.js';

//Importando path para las rutas
import path from 'path';

//Crear una instancia de express
const app = express(); //Express es un middleware, incluyen (request,response)

//Servidor de estaticos middlware
app.use(express.static(path.join(ROOT_DIR, 'public')));

//--16/05/23 -- Middleware de parseo de datos del cliente en urlencoded
app.use(express.urlencoded({extended: true}));

//Se agrega ruta del administrador
//Estableciendo un candado el cual indicara que se accedera a la ruta siempre
//y cuando sea admin
app.use('/admin',adminRoute);

//Agregando la ruta de la tienda
app.use(shopRoute);

//Definir puertos
const port = 3000;
const ip = "0.0.0.0";

//Creando el servidor utilizando express y ejecutandolo
app.listen(port,ip, (err) => {
    console.log("👂 Sirviendo en http://localhost:3000");
})