const httpStatus = require('http-status');
const {userService} = require('../services')
const {validationResult} = require("express-validator");

/**
* Create User
* */
const createUser = async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const user = {
        username: req.body.username,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
    };
    await userService.createUser(user);
    return res.status(httpStatus.CREATED).send(user);
};

/**
 * Get all User
 * */
const getAllUser = async (req, res) => {
    try{
        const users = await userService.queryUsers();
        return res.status(200).json(users)
    } catch (e) {
        return res.status(500).json(e)
    }
}

module.exports = {
    createUser,
    getAllUser
}
