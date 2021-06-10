const { home_route } = require('./home_route')
const { res_router } = require('./res_router')
const { product_routes } = require('./product_routes')
const { user_router } = require('./user_router.js')

async function router(req, res)
{
    if (req.url === '/')
    {
        console.log("[router] hitted /home case")
        home_route(req, res)
    }
    else if (req.url === '/daily' && req.method === 'GET')
    {
        req.url = "/daily.html"
        res_router(req, res)
    }
    else if (req.url === '/about' && req.method === 'GET')
    {
        req.url = "/about.html"
        res_router(req, res)
    }
    else if (req.url.match(/\/products/) && req.url[1] === 'p')
    {
        console.log("[router] hitted products case")
        product_routes(req, res)
    }
    else if (req.url.match(/([0-9a-zA-Z]+.css|.js|.jpg)/) && req.method === "GET")
    {
        res_router(req, res)
    }
    else if (req.url.match(/\/user/))
    {
        console.log("[router] hitted user case")
        user_router(req, res)
    }
    else
    {
        console.log("[router] hitted 404 case")
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message : "Route not found!" }))
    }
}

module.exports = {
    router
}