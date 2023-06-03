//Importando el router de express
import Router from 'express';
const router = Router();

//Importando controlador de productos
import { getShowProducts } from '../controllers/products.controller.js';

//Importando error de pagina
import { getErrorPage } from '../controllers/httpError.controller.js';

//Refactorizando los productos
router.get('/',getShowProducts);

//Obtener la pagina about
router.get('/about', (request,response) =>{
    console.log("Sirviendo la ruta 'acerca de'");
    response.send(`
    <h1>About...❓</h1>
    <p>App for Fullstack Web Dev Course I!</p>
    `);
});

router.use(getErrorPage);

export default router;