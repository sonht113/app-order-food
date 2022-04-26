const Product = require('../models/Product')

/**
 * Create Product
 * @param {Object} productBody
 * @return {Promise<product>}
 */

const createProduct = async ({name, description, category, price, count, image}) => {
    return Product.create({
        name: name,
        description: description,
        category: category,
        price: price,
        count: count,
        image: image
    })
}

/**
 * Get All Product
 * @param {Number} page
 * @return {Promise<void>}
 */
const queryProducts = async (page) => {
    const perPage = Number(process.env.PER_PAGE) // product on one page
    const pageNumber = page || 1
    console.log(perPage)

    return Product
        .find()
        .skip((perPage * pageNumber) - perPage)
        .limit(perPage)
        .exec((err, products) => {
            Product.countDocuments((err, count) => {
                if(err) return err;
                return products;
            })
        })
}

/**
 * Get Product by id
 * @param {ObjectId} productId
 * @return {Promise<product>}
 */
const getProductById = async (productId) => {
    const product = Product.findById(productId)
    return product
}

/**
 * Update product by id
 * @param {ObjectId} productId
 * @param {Object} productBody
 * @return {Promise<product>}
 */
const updateProductById = async (productId, productBody) => {
    return Product.findByIdAndUpdate(productId, productBody)
}

/**
 * Delete product by id
 * @param {ObjectId} productId
 * @return {Object} product
 */
const deleteProductById = async (productId) => {
    return Product.findByIdAndDelete(productId)
}

module.exports = {
    createProduct,
    queryProducts,
    getProductById,
    updateProductById,
    deleteProductById
}
