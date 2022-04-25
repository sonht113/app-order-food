const httpStatus = require('http-status');
const User = require('../models/User')

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async ({username, address, phone, email, password}) => {
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
 * @returns {Object} user
 */
const queryUsers = async () => {
    const users = User.find()
    return users
}

/**
 * Get user by id
 * @param {ObjectId} userId
 * @return {Promise<User>}
 */
const getUserById = async (userId) => {
    const user = User.findById(userId)
    return user;
}

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateUserBody
 * @return {Object} new user
 */
const updateUserById = async (userId, updateUserBody) => {
    return User.findByIdAndUpdate(userId, updateUserBody);
}

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @return {Object} user
 */
const deleteUserById = async (userId) => {
    return User.findByIdAndDelete(userId);
}

module.exports = {
    createUser,
    queryUsers,
    getUserById,
    updateUserById,
    deleteUserById
}
