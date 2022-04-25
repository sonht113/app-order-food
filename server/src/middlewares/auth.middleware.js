const User = require('../models/User');
const {userService} = require('../services');

const authMiddleware = {
    /**
     * Check email, username, phone.
     * @return Error
     */
    checkUserCreate: async (req, res, next) => {
        const userEmail = await User.findOne({email: req.body.email})
        const userName = await User.findOne({username: req.body.username})
        const userPhone = await User.findOne({phone: req.body.phone})
        if(userName) {
            return res.status(400).json('Name user was already used!')
        }
        if(userEmail){
            return res.status(400).json('Email is exist!')
        }
        if (userPhone) {
            return res.status(400).json('Phone was already used!!')
        }
        next()
    },
    checkUserUpdate: async (req, res, next) => {
        const oldUser = await userService.getUserById(req.params.userId)
        const userEmail = await User.findOne({email: req.body.email})
        const userName = await User.findOne({username: req.body.username})
        const userPhone = await User.findOne({phone: req.body.phone})
        /**
         *TODO: check email, username, phone when update. If email, username, phone is old email, username, phone
         * then update, if email, username, phone is not old email, username, password then error notification.
          */
    }

}

module.exports = authMiddleware;
