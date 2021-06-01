const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    id: String,
    name: String,
    gender: String,
    price: String
})

module.exports = mongoose.model('Product', productSchema)
