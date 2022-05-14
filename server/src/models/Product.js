const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true,
            trim: true,
        },
        count: {
            type: Number,
            required: true,
            trim: true
        },
        isHot: {
            type: Boolean,
            required: true,
            trim: true
        },
        isNew: {
            type: Boolean,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Product', productSchema);
