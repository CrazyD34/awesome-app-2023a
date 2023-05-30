//Importando el router de express
import Router from 'express';
import path from 'path';
const router = Router();

//importando ROOT_DIR
import { ROOT_DIR } from '../helpers/paths.js';    

//Base de datos en un arreglo
export const products = [];

//GET /add-products
//GET /admin/add-products
router.get('/add-products', (request,response,next) => {
   //Sirviendo el formulario con hbs
   console.log("📣Mostrando el formulario");
   response.render('add-products',{addProducts: 'active'});
})

//Procesando la informacion recibida del formulario
//POST /add-product
router.post('/add-products', (request,response) =>{
    //Desestructuracion de "name" de body en la peticion
    const {title} = request.body
    products.push(title);
    //Redireccionando a la pagina raiz
    response.redirect('/');
});


//Exportando el enrutador a la "main/app.js"
export default router;