var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
    userID: String,
    name: String,
    lname: String,
    phone: String,
    email: String,
    address: String,
    city: String,
    country: String

});

var Contacts = mongoose.model('contacts', contactSchema);

module.exports = Contacts;