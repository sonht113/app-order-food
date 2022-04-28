const { categoryService } = require('../services');
const {validationResult} = require("express-validator");

/* CREATE category */
const createCategory = async (req, res) => {
    try {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const category = {
            name: req.body.name,
            description: req.body.description
        };
        const createdCategory = await categoryService.createCategory(category);
        return res.status(200).json(createdCategory);
    } catch (err) {
        return res.status(500).json(err);
    }
};

/* GET all category */
const getAllCategory = async (req, res) => {
    try {
        const categories = await categoryService.queryCategories();
        return res.status(200).json(categories);
    } catch (err) {
        return res.status(500).json(err);
    }
};

/* GET category by id */
const getCategory = async (req, res) => {
    try {
        const category = await categoryService.getCategoryById(req.params.categoryId);
        return res.status(200).json(category);
    } catch (err) {
        return res.status(500).json(err);
    }
};

/* UPDATE category by id */
const updateCategory = async (req, res) => {
    const category = await categoryService.getCategoryById(req.params.categoryId);
    if (!category) {
        return res.status(404).json('Category not found!');
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const newCategory = {
        name: req.body.name,
        description: req.body.description
    };


    if (category.name === req.body.name) {
        await categoryService.updateCategoryById(req.params.categoryId, newCategory);
        return res.status(200).json(newCategory);
    } else {
        const categoryByName = await categoryService.getCategoryByName(req.body.name);
        if (categoryByName) {
            return res.status(500).json('Category name is exist!');
        }
        await categoryService.updateCategoryById(req.params.categoryId, newCategory);
        return res.status(200).json(newCategory);
    }
};

/* DELETE category by id */
const deleteCategory = async (req, res) => {
    const category = await categoryService.getCategoryById(req.params.categoryId);
    if (!category) {
        return res.status(404).json('Category not found!');
    }
    await categoryService.deleteCategoryById(req.params.categoryId);
    return res.status(200).json('Delete successfully!');
};

module.exports = {
    createCategory,
    getAllCategory,
    getCategory,
    updateCategory,
    deleteCategory,
};
