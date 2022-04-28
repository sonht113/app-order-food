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
        minLength: 20,
        maxLength: 100,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true,
        minLength: 50
    }
}, {timestamps: true})

const MessageContact = mongoose.model('MessageContact', messageContactSchema)

module.exports = MessageContact
