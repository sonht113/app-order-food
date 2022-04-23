const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connect DB sucessfully!!!");
    } catch(error) {
        console.log("Connect DB Fail!!!");
    }
};

module.exports = { connect };