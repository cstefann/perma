const { getProducts, getProduct, createProduct } = require('../controllers/product_controller')
const { res_router } = require('./res_router')

function product_routes(req, res)
{
    if (req.url === "/products")
    {
        if(req.method === "GET")
        {
            console.log("[router-log] %s request on getting products", req.method)
            req.url = "/explore.html"
            res_router(req, res)
            getProducts(res)
        }
        else if (req.method === 'POST')
        {
            console.log("[router-log] %s request on creating one product", req.method)
            createProduct(req, res)
        }
    }
    // route for spcific product (we do a match on the route to refer to all products individually)
    else if (req.url.match(/\/products\/([0-9]+)/) && req.method === "GET")
    {
        console.log("[router-log] %s request on getting one product", req.method)
        const id = req.url.split('/')[2] // For a link like this: /products/12 => id = 12 (split after /)
        getProduct(res, id)
    }
}

module.exports = {
    product_routes
}