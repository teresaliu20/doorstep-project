const express = require('express');
const router = express.Router();
var models = require('../models/models');
var User = models.User;
var Item = models.Item;
var Community = models.Community

// Get the community object as data for the community page
router.get('/community/:id', (req, res) => {
    Community.findById(req.params.id)
    .populate('users')
    .populate('items')
    .exec((community) => {
        if (!community) {
            console.log("Community does not exist");
        }
        else {
            console.log("Successfully sent community data");
            res.json(community);
        }
    })
    .catch(err => console.log("Error: ", err))
});

// Adds user to community object
router.post('/add-user', (req, res) => {
    var communityId = req.body.communityId;
    var userId = req.body.userId;

    Community.findById(communityId)
    .then(community => {
        console.log(community);

        // if the user already exists in the community
        if (community.users.indexOf(userId) !== -1) {
            console.log("Error: user already exists")
            return res.json({success: true, response: community});
        }

        var newUsers = [...community.users];
        newUsers.push(userId);
        console.log("NEW" + newUsers);
        community.update({users: newUsers})
        .then((result) => {
            community.users = newUsers;
            console.log(community);    
            res.json({success: true, response: community})
        })
    })
    .catch(err => console.log("Error: ", err));
})

router.post('/create-item', (req, res) => {
    var newItem = new Item({
        name: req.body.name,
        imgURL: req.body.imgURL,
        owner: req.body.ownerId
    });
    newItem.save((err, item) => {
        if (err) {
            console.log(err);
            res.json({failure: "database error"});
        }
        else {
            Community.findById(req.body.communityId, (err, community) => {
                if (err) {
                    console.log(err);
                    res.json({failure: "database error"});
                }
                else {
                    var newItems = [...community.items];
                    newItems.push(item._id);
                    community.update({items: newItems}, (err) => {
                        if (err) {
                            console.log(err);
                            res.json({failure: "database error"});
                        }
                        else {
                            console.log("You created an item in the commmunity!!!");
                            res.json({success: true, response: community});
                        }
                    });
                }
            });
        }
    });
});

router.post('/create-community', (req, res) => {
    console.log(req.body);
    var newCommunity = new Community ({
        name: req.body.name,
        description: req.body.description,
        users: [],
        items: []
    });
    newCommunity.save((err, community) => {
        if (err) {
            res.json({failure: "database error"});
        }
        else {
            res.json({success: true, response: community})
        }
    })
})


// Get communities from database
router.get('/community/:id', (req, res) => {
    var id = req.params.id;
});

// // Add new community to the community database
// router.post('/community/new', (req, res) => {

// })


// SAMPLE ROUTE
router.use('/users', (req, res) => {
    res.json({ success: true });
});

module.exports = router;
