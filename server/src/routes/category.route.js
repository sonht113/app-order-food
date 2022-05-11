const express = require('express');
const { categoryController } = require('../controllers');
const { body } = require('express-validator');
const {authMiddleware} = require('../middlewares')

const router = express.Router();

/** CREATE category */
router.post(
  '/create-category',
  body('name').not().isEmpty({ ignore_whitespace: true }),
  body('icon').not().isEmpty({ignore_whitespace: false}),
  body('description').not().isEmpty({ignore_whitespace: true}),
  authMiddleware.verifyTokenAndAdmin,
  categoryController.createCategory);

/** GET all category */
router.get('/all-categories', authMiddleware.verifyToken, categoryController.getAllCategory);

/** UPDATE category */
router.put(
  '/update-category/:categoryId',
  body('name').not().isEmpty({ignore_whitespace: true}),
  body('icon').not().isEmpty({ignore_whitespace: false}),
  body('description').not().isEmpty({ignore_whitespace: true}),
  authMiddleware.verifyTokenAndAdmin,
  categoryController.updateCategory);

/** DELETE category */
router.delete('/del-category/:categoryId', authMiddleware.verifyTokenAndAdmin, categoryController.deleteCategory);

module.exports = router;
