const products = require('../index/products.json')
const { v4: uuidv4 } = require('uuid')
const { writetofile } = require('../utils')

function findAll() 
{
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

function findByID(id) 
{
    return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id === id)
        resolve(product)
    })
}

function create(product) 
{
    return new Promise((resolve, reject) => {
        const newProduct = {id: uuidv4(), ...product} // ... used to transfer key values from product to newProduct
        products.push(newProduct)
        writetofile('./index/products.json', products)
        resolve(newProduct)
    })
}

module.exports = {
    findAll,
    findByID,
    create
}