//Importando el router de express
import Router from 'express';
import path from 'path';
const router = Router();

//importando ROOT_DIR
import { ROOT_DIR } from '../helpers/paths.js';    
//Importando controlador
import { getAddProduct, postAddProduct} from '../controllers/products.controller.js';
//Base de datos en un arreglo
export const products = [];

//GET /add-products
//GET /admin/add-products
router.get('/add-products', getAddProduct);

//Procesando la informacion recibida del formulario
//POST /add-product
router.post('/add-products', postAddProduct);


//Exportando el enrutador a la "main/app.js"
export default router;