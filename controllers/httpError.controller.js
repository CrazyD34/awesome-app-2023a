//Pagina de error
export const getErrorPage = function (request,response){
    response.render('notfound',{
        docTitle: "Error 404"
    });
}