//Importando el router de express
import Router from 'express';
const router = Router();

//Importando controlador de productos
import { getShowProducts } from '../controllers/products.controller.js';
//Importando error de pagina
import { getErrorPage } from '../controllers/httpError.controller.js';
//Importando pagina de about
import { aboutMePage } from '../controllers/aboutMe.controller.js';

//Refactorizando los productos
router.get('/',getShowProducts);
//Obtener la pagina about
router.get('/about', aboutMePage);
//Obteniendo la pagina de error en caso que se quiera acceder a una pagina inexistente
router.use(getErrorPage);

//Exportando el router
export default router;