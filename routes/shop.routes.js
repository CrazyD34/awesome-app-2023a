//Importando el router de express
import Router from 'express';
const router = Router();

//Importando el gestor de rutas
import path from 'path';

//Importando arreglos de productos
import { products } from './admin.routes.js';

router.get('/', (request,response) =>{
    console.log("Sirviendo la ruta raiz 🍽️");
    console.log(products);
    response.render('shop',{shop:'active', docTitle:"Shop"});
});

router.get('/about', (request,response) =>{
    console.log("Sirviendo la ruta 'acerca de'");
    response.send(`
    <h1>About...❓</h1>
    <p>App for Fullstack Web Dev Course I!</p>
    `);
});

router.use((request,response) => {
    response.render('notfound');
})

export default router;