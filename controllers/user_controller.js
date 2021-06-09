const User = require('../models/user_model')
const { getPostData } = require('../utils/utils')

// @desc Create an User
// @route POST /users
async function createUser(req, res)
{
    try
    {
        const body = await getPostData(req)

        const {fullname, username, gender, password, country} = JSON.parse(body)
        
        // checking if the username is taken
        User.find({username: username})
            .select({ _id: 0, __v: 0})
            .exec()
            .then(usr => {
                if (usr.length)
                {
                    console.log("[user-controller] Username (%s) is taken! Try another one!", username)
                    res.writeHead(200, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify(usr))
                }
                else
                {
                    // adding user to db
                    const user = new User({
                        fullname,
                        username,
                        password,
                        gender,
                        country
                    })
            
                    user
                        .save()
                        .then(result => {
                                console.log("[user-controller] Succes on creating new user")
                                res.writeHead(201, { 'Content-Type' : 'application/json'}) // 201 - Obj created req
                                return res.end(JSON.stringify(result))
                            })
                        .catch(err => console.log(err))
                }
            })
            .catch(err => {
                console.log(err)
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(err))
            })
    }
    catch (error)
    {
        console.log(error)
    }
}

// @desc Get user infos for login
// @route POST /users
async function loginUser(req, res)
{
    try
    {
        // taking data from login page
        const body = await getPostData(req)

        const {username, password} = JSON.parse(body)

        User.find({$and:[{username: username}, {password: password}]})
            .select({ _id: 0, __v: 0})
            .exec()
            .then(usr => {
                if (usr.length)
                {
                    res.writeHead(201, { 'Content-Type' : 'application/json'})
                    res.end(JSON.stringify({
                        route: '/'
                    }))
                }
                else
                {
                    console.log('no user')
                    console.log("[user-controller] There is no user (%s)", username)
                }
            })
            .catch(err => {
                console.log(err)
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(err))
            })
    }
    catch(error)
    {
        console.log(error)
    }
}

module.exports = {
    createUser,
    loginUser
}