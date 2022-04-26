const httpStatus = require('http-status');
const {validationResult} = require("express-validator");

const {productService} = require('../services')

/**
 * Create product
 */
const createProduct = async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const product = {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        count: req.body.count,
        image: req.files
    }

    await productService.createProduct(product)
    return res.status(httpStatus.CREATED).send(product)
}

/**
 * Get all product
 * Paginate
 */
const getAllProduct = async (req, res) => {
    try {
        const products = await productService.queryProducts(req.params.page)
        return res.status(200).json(products)
    } catch (err) {
        return res.status(500).json(err)
    }
}

/**
 * Get product by id
 */
const getProduct = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.productId)
        return res.status(200).json(product)
    }catch (err) {
        return res.status(500).json(err)
    }
}

/**
 * Update product by id
 */
const updateProduct = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.productId)
        if(!product) {
            return res.status(404).json('Product not found!')
        }
        const newProduct = {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            count: req.body.count,
            image: req.files
        }

        await productService.updateProductById(req.params.productId, newProduct)
        return res.status(200).json(newProduct)
    } catch (err) {
        return res.status(500).json(err)
    }
}

/**
 * Delete product by id
 */
const deleteProduct = async (req, res) => {
    try {
        await productService.deleteProductById(req.params.productId)
        return res.status(200).json('Delete successfully!')
    }catch (err) {
        return res.status(500).json(err)
    }
}

module.exports = {
    createProduct,
    getAllProduct,
    getProduct,
    updateProduct,
    deleteProduct
}
