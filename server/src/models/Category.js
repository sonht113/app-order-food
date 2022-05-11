const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
          trim: true
        },
        icon: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
          required: true,
          trim: true
        }
    },
    {
        timestamps: true
    },
);

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
