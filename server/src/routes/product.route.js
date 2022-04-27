const express = require('express')
const {body} = require('express-validator')
const upload = require('../config/upload/multer')
const {productController} = require('../controllers')

const router = express.Router()

/**
 * Create Product
 */
router
    .post(
        '/create-product',
        // body('name').not().isEmpty({ignore_whitespace: true}),
        // body('category').not().isEmpty({ignore_whitespace: true}),
        // body('price').not().isEmpty(),
        // body('count').not().isEmpty(),
        upload.single('product_pic'),
        productController.createProduct)

module.exports = router;