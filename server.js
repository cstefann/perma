const http = require('http')
const { connectFunc } = require('./utils/database')
const { res_router } = require('./routes/res_router')

// db connection - mongoDB
connectFunc()

const server = http.createServer((req, res) => {

    // getting all resources (CSS, HTML, JS & Images)
    res_router(req, res)

    // router for products
    // if (req.url.match(/\/products/))
    // {
    //     product_routes(req, res)
    // }
    // else
    // {
    //     res.writeHead(404, { 'Content-Type': 'application/json' })
    //     res.end(JSON.stringify({ message : "Route not found!" }))
    // }
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log('[server-log] Server running on port: %d', PORT))
