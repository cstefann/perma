const Product = require('../models/product_model')
const {getPostData } = require('../utils')

// @desc Gets all Products
// @route GET /products
async function getProducts(req, res)
{
    try
    {
        const products = await Product.findAll()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products))
    }
    catch (error)
    {
        console.log(error)
    }
}

// @desc Gets single Product
// @route GET /products/:id
async function getProduct(req, res, id)
{
    try
    {
        const product = await Product.findByID(id)

        if (!product)
        {
            res.writeHead(404, { 'Content-Type': 'application/json' }) // 404 - Not Found
            res.end(JSON.stringify({ message : "Product not Found!" }))
        }
        else
        {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
        }
    }
    catch (error)
    {
        console.log(error)
    }
}

// @desc Create a Product
// @route POST /products
async function createProduct(req, res)
{
    try
    {
        const body = await getPostData(req)

        const {name, gender, price} = JSON.parse(body)

        const product = {
            name,
            gender,
            price
        }

        const newProduct = await Product.create(product)
        res.writeHead(201, { 'Content-Type' : 'application/json'}) // 201 - Obj created req
        return res.end(JSON.stringify(newProduct))
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