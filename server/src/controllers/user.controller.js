const httpStatus = require('http-status');
const {userService} = require('../services')
const {validationResult} = require("express-validator");
const bcrypt = require("bcrypt");


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

/**
 * Update user by id
 */
const updateUserById = async (req, res) => {
    const user = await userService.getUserById(req.params.userId)
    console.log(user.email)
    if(!user) {
        return res.status(404).json('User not found!');
    }
    const salt = await bcrypt.genSalt(10);
    const newUser = {
        username: req.body.username,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, salt),
        isAdmin: req.body.isAdmin
    }
    await userService.updateUserById(req.params.userId, newUser);
    return res.status(200).json(newUser)
}

/**
 * Delete user by id
 */
const deleteUserById = async (req, res) => {
    const user = await userService.getUserById(req.params.userId)
    if(!user) {
        return res.status(404).json('User not found!');
    }
    await userService.deleteUserById(req.params.userId);
    return res.status(200).json('Delete successfully!');
}

module.exports = {
    createUser,
    getAllUser,
    updateUserById,
    deleteUserById
}
