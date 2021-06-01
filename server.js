const http = require('http')
const { getProducts, getProduct, createProduct } = require('./controllers/product_controller')
const { connectFunc } = require('./database')

// db connection - mongo
connectFunc()

const server = http.createServer((req, res) => {
    // route for all products (temporary using a json file)
    if (req.url === "/products" && req.method === "GET")
    {
        console.log("[router-log] %s request on getting products", req.method)
        getProducts(req, res)
    }
    // route for spcific product (we do a matsh on the route to refer to all products individually)
    else if (req.url.match(/\/products\/([0-9]+)/) && req.method === "GET")
    {
        console.log("[router-log] %s request on getting one product", req.method)
        const id = req.url.split('/')[2] // For a link like this: /products/12 => id = 12 (split after /)
        getProduct(req, res, id)
    }
    else if (req.url === '/products' && req.method === "POST")
    {
        console.log("[router-log] %s request on creating one product", req.method)
        createProduct(req, res)
    }
    else
    {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message : "Route not found!" }))
    }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log('[server-log] Server running on port: %d', PORT))
