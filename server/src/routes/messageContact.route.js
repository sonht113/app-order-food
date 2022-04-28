const express = require('express')
const {body} = require('express-validator')
const {messageController} = require('../controllers')
const {authMiddleware} = require('../middlewares')
const router = express.Router()

/** CREATE */
router
  .post(
    '/create-mess',
    body('title').not().isEmpty({ignore_whitespace: true}),
    body('content').not().isEmpty({ignore_whitespace: true}),
    authMiddleware.verifyToken,
    messageController.createMessage)

/** GET all message */
router.get('/all-mess', authMiddleware.verifyTokenAndAdmin, messageController.getAllMessage)

/** GET message */
router.get('/mess-detail', authMiddleware.verifyTokenAndAdmin, messageController.getMessage)

/** DELETE message */
router.delete('/delete-mess', authMiddleware.verifyTokenAndAdmin, messageController.deleteMessage)

module.exports = router