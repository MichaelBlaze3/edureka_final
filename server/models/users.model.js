var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    lname: String,
    role: String,
    phone: String,
    email: String,
    username: String,
    password: String
});

var Users = mongoose.model('users', userSchema);

module.exports = Users;