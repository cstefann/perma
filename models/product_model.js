const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    id: String,
    name: String,
    gender: String,
    price: String
})

module.exports = mongoose.model('Product', productSchema)
