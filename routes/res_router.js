const { getCSS, getHtml, getJS, getPhoto } = require('../controllers/res_controller')

async function res_router(req, res)
{
    // taking only the needed resource from url
    req.url = req.url.split("/").pop()

    console.log("[res-router] Got url (%s) with method (%s)", req.url, req.method)

    if (req.url.match(/([0-9a-zA-Z]+.css)/) && req.method === "GET")
    {
        console.log("[res] Hitted css func")
        getCSS(req, res)
    }
    else if (req.url.match(/([0-9a-zA-Z]+.html)/) && req.method === "GET")
    {
        console.log("[res] Hitted html func")
        getHtml(req, res)
    }
    else if (req.url.match(/([0-9a-zA-Z]+.js)/) && req.method === "GET")
    {
        console.log("[res] Hitted js func")
        getJS(req, res)
    }
    else if (req.url.match(/([0-9a-zA-Z]+.jpg)/) && req.method === "GET")
    {
        console.log("[res] Hitted photo func")
        getPhoto(req, res)
    }
}

module.exports = {
    res_router
}