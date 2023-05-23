//Importando el router de express
import Router from 'express';
import path from 'path';
const router = Router();

//GET /add-products
router.get('/add-products', (request,response,next) => {
    //Se muestra el formulario
    console.log("📝Mostrando el formulario");
    response.sendFile(path.resolve('views','add-products.html'));
})

//Procesando la informacion recibida del formulario
//POST /add-product
router.post('/add-products', (request,response) =>{
    //Extrayendo los parametros en la peticion
    console.log(request.body);
    response.redirect('/');
});


//Exportando el enrutador a la "main/app.js"
export default router;