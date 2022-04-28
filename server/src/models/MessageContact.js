const mongoose = require('mongoose')

const messageContactSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true})

const MessageContact = mongoose.model('MessageContact', messageContactSchema)

module.exports = MessageContact
