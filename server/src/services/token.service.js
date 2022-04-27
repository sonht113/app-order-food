const jwt = require('jsonwebtoken')

const generateAccessToken = (user) => {
    return jwt.sign({
         id: user.id,
        isAdmin: user.isAdmin
    }, process.env.JWT_ACCESS_KEY, {expiresIn: '1s'})
}

module.exports = {
    generateAccessToken
}