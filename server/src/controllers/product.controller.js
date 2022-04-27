const { validationResult } = require('express-validator');
const { productService } = require('../services/index');

/**
 * Create product
 */
const createProduct = async (req, res) => {
    try {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const product = {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            image: `/image/${req.file.filename}`,
            price: req.body.price,
            count: req.body.count,
        };
        const productByName = await productService.getProductByName(req.body.name);
        if (productByName) {
            return res.status(400).json('Product name is exist!');
        }
        await productService.createProduct(product);
        return res.status(200).json(product);
    } catch (err) {
        return res.status(500).json('Can not post product');
    }
};

/**
 * Get all product
 * Paginate
 */
const getAllProduct = async (req, res) => {
    try {
        if (req.params.page < 1) {
            return res.status(500).json('Not valid!');
        }
        const products = await productService.queryProducts(req.params.page);
        console.log(products);
        return res.status(200).json(products);
    } catch (err) {
        return res.status(500).json(err);
    }
};

/**
 * Get product by id
 */
const getProduct = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.productId);
        return res.status(200).json(product);
    } catch (err) {
        return res.status(500).json(err);
    }
};

/**
 * Update product by id
 */
const updateProduct = async (req, res) => {
    const product = await productService.getProductById(req.params.productId);
    const errors = validationResult(req);

    if (!product) {
        return res.status(404).json('Product not found!');
    }

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const newProduct = {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        count: req.body.count,
        image: `/image/${req.file.filename}`,
    };

    if (product.name === req.body.name) {
        await productService.updateProductById(req.params.productId, newProduct);
        return res.status(200).json(newProduct);
    } else {
        const productByName = await productService.getProductByName({ name: req.body.name });
        if (productByName) {
            return res.status(500).json('Name product is exist!');
        }
        await productService.updateProductById(req.params.productId, newProduct);
        return res.status(200).json(newProduct);
    }
};

/**
 * Delete product by id
 */
const deleteProduct = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.productId);
        if (!product) {
            return res.status(404).json('Product not found!');
        }
        await productService.deleteProductById(req.params.productId);
        return res.status(200).json('Delete successfully!');
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports = {
    createProduct,
    getAllProduct,
    getProduct,
    updateProduct,
    deleteProduct,
};
