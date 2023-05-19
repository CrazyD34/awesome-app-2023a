//Importando el router de express
import Router from 'express';
const router = Router();

//GET /add-products
router.get('/add-products', (request,response) => {
    //Si la peticion recibida es POST
    if(request.method === "POST") return next();
    //Se muestra el formulario
    console.log("📝Mostrando el formulario");
    response.send(`
    <form action="/add-products" method="POST">
        <input type="text" name="Title">
        <button type="submit">Add a product</button>
    </form>
    `);
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