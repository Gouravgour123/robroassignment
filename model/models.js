const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'Supervisor', 'Worker'], default: 'Admin' },
    adminProvidedPassword: { type: Boolean, default: false }
});
const User = mongoose.model("user",userSchema)
module.exports = {User}