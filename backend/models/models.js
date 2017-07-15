const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    fName: {
        type: String,
    },
    lName: {
        type: String,
    },
    imgURL: {
        type: String,
    },
});

var itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    // categories: {
    //     type: Array,
    // },
    imgURL: {
        type: String,
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
});

var communitySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    users: [{
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }],
    items: [{
        type: mongoose.Schema.ObjectId,
    }]
});

var requestSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    text: {
        type: String
    }
});

var User = mongoose.model('User', userSchema);
var Item = mongoose.model('Item', itemSchema);
var Community = mongoose.model('Community', communitySchema);
var Request = mongoose.model('Request', requestSchema);

module.exports = {
    User: User,
    Item: Item,
    Community: Community,
    Request: Request
};
