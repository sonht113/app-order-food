const express = require('express');
const router = express.Router();
const {userController} = require('../controllers')

/* GET users listing. */
router.post('/new-user', userController.createUser);

module.exports = router;
