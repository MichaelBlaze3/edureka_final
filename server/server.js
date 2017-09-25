var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var Users = require('./models/users.model');
var Contacts = require('./models/contacts.model');

var url = "mongodb://localhost/edureka";
mongoose.connect(url);

app.use(bodyParser.json());

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// Admin Commands
app.get('/getUser', function (req, res) {
    Users.findOne({ "_id": req.query.id }, function (err, doc) {
        if (err) {
            console.log(err);
        }
        res.json(201, doc);
    });
});

app.get('/getUsers', function (req, res) {
    Users.find(function (err, users) {
        res.send(users);
    });
});

app.post('/addUser', function (req, res) {
    var user = new Users({
        name: req.body.name,
        lname: req.body.lname,
        role: req.body.role,
        phone: req.body.phone,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    Users.create(user, function (err, user) {
        if (err) {
            console.log(err);
            res.json(err);
        }
        res.json(user);
    });
});

app.post('/removeUser', function (req, res) {
    Users.deleteOne({ "_id": req.query.id }, function (err, del) {
        if (err) {
            console.log(err);
        }
        res.json(201, del);
    });
});

app.post('/updateUser', function (req, res) {
    Users.findOne({ "_id": req.query.id }, function (err, doc) {
        if (err) {
            console.log(err);
        }
        doc.name = req.query.name;
        doc.save();
        res.json(201, doc);
    });
});

//Contacts
app.post('/addContact', function (req, res) {
    var contact = new Contacts({
        userID: req.query.id,
        name: req.query.name,
        lname: req.query.lname,
        phone: req.query.phone,
        email: req.query.email,
        address: req.query.address,
        city: req.query.city,
        country: req.query.country
    });

    Contacts.create(contact, function (err, contact) {
        if (err) {
            console.log(err);
        }
        res.json(201, contact);
    });
});

app.get('/getContact', function (req, res) {
    Contacts.findOne({ "userID": req.query.id }, function (err, doc) {
        if (err) {
            console.log(err);
        }
        res.json(201, doc);
    });
});

app.post('/removeContact', function (req, res) {
    Contacts.deleteOne({ "_id": req.query.id }, function (err, del) {
        if (err) {
            console.log(err);
        }
        res.json(201, del);
    });
});

app.post('/updateContact', function (req, res) {
    Contacts.findOne({ "_id": req.query.id }, function (err, doc) {
        if (err) {
            console.log(err);
        }
        doc.name = req.query.name;
        doc.save();
        res.json(201, doc);
    });
});

app.listen(3000, function () {
    console.log("Server listening in port 3000");
});

