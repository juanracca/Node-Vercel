const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 255
    },
    email: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 255
    },
    password: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 255
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;