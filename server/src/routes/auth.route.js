const express = require('express')
const {authController} = require('../controllers')

const {body} = require('express-validator')

const router = express.Router()

// Login
router
    .post('/login',
        body('email').isEmail().not().isEmpty({ignore_whitespace: false}),
        body('password').not().isEmpty({ignore_whitespace: false}).isLength({min: 8, max: undefined}),
        authController.loginUser)

module.exports = router
