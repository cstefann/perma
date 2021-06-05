const {res_router} = require('../routes/res_router')

function home_route(req, res) 
{
    console.log("[home-router-log] Home pages with %s req", req.method)
    console.log("[home-router-log] Home pages with %s url", req.url)

    res_router(req, res)
}

module.exports = {
    home_route
}