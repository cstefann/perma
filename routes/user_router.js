const { createUser, loginUser } = require('../controllers/user_controller')
const { res_router } = require('./res_router')

async function user_router(req, res)
{
    console.log("[user-router] Request on (%s) with method (%s)", req.url, req.method)

    if(req.url.match(/\/signup/))
    {
        if (req.method === "GET")
        {
            req.url = "/signup.html"
            res_router(req, res)
        }
        else if (req.method === "POST")
        {
            createUser(req, res)
        }
    }
    else if(req.url.match(/\/login/))
    {
        if (req.method === "GET")
        {
            req.url = "/login.html"
            res_router(req, res)
        }
        else if (req.method === "POST")
        {
            loginUser(req, res)
        }
    }
}

module.exports = {
    user_router
}