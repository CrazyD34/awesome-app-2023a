//Importando el router de express
import Router from 'express';
const router = Router();

//Importando el gestor de rutas
import path from 'path';

router.get('/', (request,response) =>{
    console.log("Sirviendo la ruta raiz 🍽️");
    response.sendFile(path.resolve('views','shop.html'))
});

router.get('/about', (request,response) =>{
    console.log("Sirviendo la ruta 'acerca de'");
    response.send(`
    <h1>About...❓</h1>
    <p>App for Fullstack Web Dev Course I!</p>
    `);
});

export default router;