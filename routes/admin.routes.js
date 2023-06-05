//Importando el router de express
import Router from 'express';
//Creando router
const router = Router();

//Importando controlador para añadir y agregar un producto
import { getAddProduct, postAddProduct} from '../controllers/products.controller.js';
//Base de datos en un arreglo llamado productos
export const products = [];

//GET /add-products
//GET /admin/add-products
router.get('/add-products', getAddProduct);

//Procesando la informacion recibida del formulario
//POST /add-product
router.post('/add-products', postAddProduct);

//Exportando el enrutador a la "main/app.js"
export default router;