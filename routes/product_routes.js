const { getProducts, getProduct, createProduct } = require('../controllers/product_controller')

function product_routes(req, res)
{
    if (req.url === "/products" && req.method === "GET")
    {
        console.log("[router-log] %s request on getting products", req.method)
        getProducts(res)
    }  
    // route for spcific product (we do a matsh on the route to refer to all products individually)
    else if (req.url.match(/\/products\/([0-9]+)/) && req.method === "GET")
    {
        console.log("[router-log] %s request on getting one product", req.method)
        const id = req.url.split('/')[2] // For a link like this: /products/12 => id = 12 (split after /)
        getProduct(res, id)
    }
    else if (req.url === '/products' && req.method === "POST")
    {
        console.log("[router-log] %s request on creating one product", req.method)
        createProduct(req, res)
    }
}

module.exports = {
    product_routes
}