const express = require('express')
const {body} = require('express-validator')
const upload = require('../config/upload/multer')
const {productController} = require('../controllers')

const router = express.Router()

/* CREATE new product */
router
    .post(
        '/create-product',
        // body('name').not().isEmpty({ignore_whitespace: true}),
        // body('category').not().isEmpty({ignore_whitespace: true}),
        // body('price').not().isEmpty(),
        // body('count').not().isEmpty(),
        upload.single('product_pic'),
        productController.createProduct)

/*
 * GET all product
 * Paginate
 */
router.get('/list-product/:page', productController.getAllProduct)

/* GET product by id */
router.get('/info-product/:productId', productController.getProduct)

/* UPDATE product by id */
router.put('/upd-product/:productId',  upload.single('product_pic'), productController.updateProduct)

/* DELETE product by id */
router.delete('/delete-product/:productId', productController.deleteProduct)

module.exports = router;