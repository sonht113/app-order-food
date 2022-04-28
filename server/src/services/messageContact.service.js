const messageContact = require('../models/MessageContact');

/**
 * Create message
 * @param {Object} messageBody
 * @return {Promise<message>}
 */
const createMessage = async ({ author, title, content }) => {
    return messageContact.create({ author: author, title: title, content: content });
};

/**
 * Get all message
 * @return {Promise<message>}
 */
const queryMessages = async () => {
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

/**
 * Delete message by id
 * @param {ObjectId} messageId
 * @return {Promise<Message>}
 */
const deleteMessageById = async (messageId) => {
    return messageContact.findByIdAndDelete(messageId)
}

module.exports = {
    createMessage,
    queryMessages,
    getMessageById,
    getMessageByTitle,
    deleteMessageById
};
