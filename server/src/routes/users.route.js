const express = require('express');
const router = express.Router();
const upload = require('../config/upload/multer')
const { body } = require('express-validator');

const {userController} = require('../controllers');
const userMiddleware = require('../middlewares/user.middleware');


/* POST new user. */
router
    .post(
        '/register',
        body('username').not().isEmpty({ignore_whitespace: true}),
        body('address').not().isEmpty({ignore_whitespace: true}),
        body('phone').not().isEmpty({ignore_whitespace: false}),
        body('email').isEmail().not().isEmpty({ignore_whitespace: false}),
        body('password').not().isEmpty({ignore_whitespace: false}).isLength({min: 8, max: undefined}),
        userMiddleware.checkUser,
        userController.createUser);

/* GET users. */
router.get('/all-user', userController.getAllUser);

/* UPDATE user. */
router
    .put('/update-user/:userId',
        body('username').not().isEmpty({ignore_whitespace: true}),
        body('address').not().isEmpty({ignore_whitespace: true}),
        body('phone').not().isEmpty({ignore_whitespace: false}),
        body('email').isEmail().not().isEmpty({ignore_whitespace: false}),
        body('password').not().isEmpty({ignore_whitespace: false}).isLength({min: 8, max: undefined}),
        upload.single('avatar'),
        userController.updateUserById
        );

/* DELETE user */
router.delete('/delete-user/:userId', userController.deleteUserById);

module.exports = router;
