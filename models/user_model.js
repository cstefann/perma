const mongoose = require('mongoose')

const userScehma = mongoose.Schema({
    fullname: String,
    username: String,
    password: String,
    gender: String,
    country: String
})

module.exports = mongoose.model('User', userScehma)
