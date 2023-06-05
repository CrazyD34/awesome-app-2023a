//Pagina acerca de 
export const aboutMePage = function (request,response)
{
    response.render('about',
    {
        docTitle: 'About Me'
    });
}