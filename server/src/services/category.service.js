const Category = require('../models/Category')

/**
 * Create Category
 * @param {Object} categoryBody
 * @return {Promise<Category>}
 */
const createCategory = async ({name, description}) => {
    return Category.create({name: name, description: description})
}

/**
 * Get all Category
 * @return {Promise<Category>}
 */
const queryCategories = async () => {
    return Category.find()
}

/**
 * Get Category by id
 * @param {ObjectId} categoryId
 * @return {Promise<Category>}
 */
const getCategoryById = async (categoryId) => {
  return Category.findById(categoryId)
}

/**
 * Get Category by name
 * @param {{name}} categoryName
 * @return {Promise<Category>}
 */
const getCategoryByName = async (categoryName) => {
    return Category.findOne({name: categoryName})
}

/**
 * update Category by id
 * @param {ObjectId} categoryId
 * @param {Object} categoryBody
 * @return {Promise<Category>}
 */
const updateCategoryById = async (categoryId, categoryBody) => {
  return Category.findByIdAndUpdate(categoryId, categoryBody)
}

/**
 * Delete Category by id
 * @param {ObjectId} categoryId
 * @return {Promise<Category>}
 */
const deleteCategoryById = async (categoryId) => {
    return Category.findByIdAndDelete(categoryId)
}

module.exports = {
    createCategory,
    queryCategories,
    getCategoryById,
    getCategoryByName,
    updateCategoryById,
    deleteCategoryById
}
