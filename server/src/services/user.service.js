const httpStatus = require('http-status');
const User = require('../models/User')

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async ({username, address, phone, email, password, isAdmin}) => {
    return User.create({
        username,
        address,
        phone,
        email,
        password
    })
};

/**
 * Get all user
 * @returns {Promise<User>}
 */
const queryUsers = async () => {
    const users = User.find()
    return users
}

module.exports = {
    createUser,
    queryUsers
}
