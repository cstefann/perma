const { res_router } = require('./res_router')

// homepage is static, that's why I have only a GET method treated

function home_route(req, res) 
{
    if (req.method === 'GET')
    {
        req.url = "/index.html"
        res_router(req, res)
    }
}

module.exports = {
    home_route
}