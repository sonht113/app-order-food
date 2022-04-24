const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            maxlength: 25,
            required: true,
            trim: true,
        },
        address: {
            type: String,
            maxlength: 50,
            required: true,
            trim: true,
        },
        phone: {
            type: String,
            minlength: 10,
            maxlength: 12,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Invalid email');
                }
            },
        },
        password: {
            type: String,
            minlength: 8,
            required: true,
            validate(value) {
                if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                    throw new Error(
                        'Password must contain at least one letter and one number'
                    );
                }
            },
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

/**
 * Check if password matches the user's password
 * @param {string} password
 * @returns {Promise<boolean>}
 */
// userSchema.methods.isPasswordMatch = async function (password) {
//     const user = this;
//     return bcrypt.compare(password, user.password);
// };

/**
 * @param {string} password
 * @returns {hash<password>}
 */
userSchema.pre('save', async function (next) {
    const user = this;
    const salt = await bcrypt.genSalt(10);
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, salt);
    }
    next();
});

module.exports = mongoose.model('User', userSchema);
