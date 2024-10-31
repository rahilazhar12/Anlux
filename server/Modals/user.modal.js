const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    role: {
        type: String,
        default: 'User'
    }
});

module.exports = mongoose.model("users", UserSchema);
