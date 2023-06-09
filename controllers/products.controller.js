import { products } from "../routes/admin.routes.js";

//GET /admin/add-products
export const getAddProduct = function(request,response,next)
{
    //Sirviendo el formulario
    console.log("Sirviendo el formulario");
    response.render('add-products',{
        addProduct: 'active',
        viewStyle: '/css/add-products.css',
        docTitle: "Add Products"
    });
}

//Refactorizando codigo
export const postAddProduct = (request,response) =>
{
    const {title} = request.body;
    products.push(title);
    console.log(products);
    return response.redirect('/');
}

//Funcion getShowProducts
export const getShowProducts = (request,response) =>
{
    console.log("Sirviendo la ruta '/'");
    response.render('shop',{
        shop:'active',
        docTitle: 'Shop',
        viewStyle: '/css/products.css',
        isProductsListEmpty: products.length === 0,
        products
    });
}