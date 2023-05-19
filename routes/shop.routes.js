//Importando el router de express
import Router from 'express';
const router = Router();

router.get('/', (request,response) =>{
    console.log("Sirviendo la ruta raiz 🍽️");
    response.send(`
    <h1>Welcome to Express JS</h1>
    <p>This is my first,awesome and unique app!😮</p>
    `);
});

router.get('/about', (request,response) =>{
    console.log("Sirviendo la ruta 'hacerca de'");
    response.send(`
    <h1>About...❓</h1>
    <p>App for Fullstack Web Dev Course I!</p>
    `);
});

export default router;