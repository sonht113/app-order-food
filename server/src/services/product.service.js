const Product = require('../models/Product')

/**
 * Create Product
 * @param {Object} productBody
 * @return {Promise<product>}
 */
const createProduct = async ({name, description, category, image, price, count, isHot, isNew}) => {
    return Product.create({
        name: name,
        description: description,
        category: category,
        image: image,
        price: price,
        count: count,
        isHot: isHot,
        isNew: isNew
    })
}

/**
 * Get All Product
 * @param {Number} page
 * @return {Promise<{pagination: {limit, page: Number}, products: Query<Array<HydratedDocument<any, {}, {}>>, any, {}, any>}>}
 */
const queryProducts = async (page, limit) => {
    //const perPage = process.env.PER_PAGE // product on one page
    const pageNumber = page || 1

    const products = await Product.find()
        .limit(limit)
        .skip((limit * pageNumber) - limit)

    return {
        products: products,
        pagination: {
            page: page,
            limit: limit
        }
    }
}

/**
 * Get Product by id
 * @param {ObjectId} productId
 * @return {Promise<product>}
 */
const getProductById = async (productId) => {
     return Product.findById(productId)
}

/**
 * Get Product by name
 * @param {{name}} productName
 * @return {Promise<product>}
 */
const getProductByName = async (productName) => {
    return Product.findOne({name: productName})
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
    getProductByName,
    updateProductById,
    deleteProductById
}
