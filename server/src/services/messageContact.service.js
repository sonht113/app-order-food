const messageContact = require('../models/MessageContact');

/**
 * Create message
 * @param {Object} messageBody
 * @return {Promise<message>}
 */
const createMessage = async ({ title, content }) => {
    return Category.create({ title: title, content: content });
};

/**
 * Get all message
 * @return {Promise<message>}
 */
const queryMessage = async () => {
    return messageContact.find();
};

/**
 * Get Messgae by id
 * @param {ObjectId} messageId
 * @return {Promise<Message>}
 */
const getMessageById = async (messageId) => {
    return messageContact.findById(messageId);
};

/**
 * Get Message by title
 * @param {{title}} messageTitle
 * @return {Promise<Message>}
 */
const getMessageByTitle = async (messageTitle) => {
    return messageContact.findOne({ title: messageTitle });
};

module.exports = {
    createMessage,
    getMessageById,
    getMessageByTitle,
};
