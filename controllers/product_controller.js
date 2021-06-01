const Product = require('../models/product_model')
const { getPostData } = require('../utils')
const mongoose = require('mongoose')

// @desc Gets all Products
// @route GET /products
async function getProducts(req, res)
{
    Product.find({})
        .select({ _id: 0, __v: 0})
        .exec()
        .then(prods => {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(prods))
        })
        .catch(err => {
            console.log(err)
            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(err))
        })
}

// @desc Gets single Product
// @route GET /products/:id
async function getProduct(req, res, id)
{
    Product.find({id: id})
        .select({ _id: 0, __v: 0})
        .exec()
        .then(prod => {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(prod))
        })
        .catch(err => {
            console.log(err)
            res.writeHead(500, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(err))
        })
}

// @desc Create a Product
// @route POST /products
async function createProduct(req, res)
{
    try
    {
        const body = await getPostData(req)

        const {id, name, gender, price} = JSON.parse(body)

        const product = new Product({
            _id: new mongoose.Types.ObjectId(),
            id,
            name,
            gender,
            price
        })

        product
            .save()
            .then(result => {
                    console.log("[prod-controller] Succes on creating new product")
                    res.writeHead(201, { 'Content-Type' : 'application/json'}) // 201 - Obj created req
                    return res.end(JSON.stringify(result))
                })
            .catch(err => console.log(err))
    }
    catch (error)
    {
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct
}