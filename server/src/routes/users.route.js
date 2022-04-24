const express = require('express');
const router = express.Router();
const {userController} = require('../controllers')
const { body } = require('express-validator');
/* POST new user. */
router
    .post(
        '/register',
        body('username').not().isEmpty({ignore_whitespace: true}),
        body('address').not().isEmpty({ignore_whitespace: true}),
        body('phone').not().isEmpty({ignore_whitespace: false}),
        body('email').isEmail().not().isEmpty({ignore_whitespace: false}),
        body('password').not().isEmpty({ignore_whitespace: false}).isLength({min: 8, max: undefined}),
        userController.createUser);

/* GET users. */
router.get('/all-user', userController.getAllUser);
module.exports = router;
