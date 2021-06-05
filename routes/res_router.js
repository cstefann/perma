const { getCSS, getHtml, getJS, getPhoto } = require('../controllers/res_controller')

async function res_router(req, res)
{
    if (req.url.match(/([0-9a-zA-Z]+.css)/) && req.method === "GET")
    {
        getCSS(req, res)
    }
    else if (req.url.match(/([0-9a-zA-Z]+.html)/) && req.method === "GET")
    {
        getHtml(req, res)
    }
    else if (req.url.match(/([0-9a-zA-Z]+.js)/) && req.method === "GET")
    {
        getJS(req, res)
    }
    else if (req.url.match(/\/images\/([0-9a-zA-Z]+.jpg)/) && req.method === "GET")
    {
        getPhoto(req, res)
    }
}

module.exports = {
    res_router
}