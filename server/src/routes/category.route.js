const express = require('express');
const { categoryController } = require('../controllers');
const { body } = require('express-validator');

const router = express.Router();

/** CREATE category */
router.post('/create-category', body('name').not().isEmpty({ ignore_whitespace: true }), categoryController.createCategory);

/** GET all category */
router.get('/all-categories', categoryController.getAllCategory);

/** UPDATE category */
router.put('/update-category', body('name').not().isEmpty({ ignore_whitespace: true }), categoryController.updateCategory);

/** DELETE category */
router.delete('/del-category', categoryController.deleteCategory);

module.exports = router;
