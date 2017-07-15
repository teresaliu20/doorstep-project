const express = require('express');
const router = express.Router();
var models = require('../models/models');
var User = models.User;
var Item = models.Item;
var Community = models.Community;
var Request = models.Request;

// Get the community object as data for the community page
router.get('/community/:id', (req, res) => {

    Community.findById(req.params.id)
    .populate('users')
    .populate('items')
    .then((community) => {
        if (!community) {
            console.log("Community does not exist");
        }
        else {
            console.log("Successfully sent community data");
            return res.json(community);
        }
    })
    .catch(err => {
        console.log(err);
        return res.json({failure: "database error"});
    });
});

// Adds existing user to community object
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
            res.json({success: true, response: community})
        })
    })
    .catch(err => {
        console.log(err);
        return res.json({failure: "database error"});
    });
})

// Create a new item within the community, update both commmunity and item sections of database
router.post('/create-item', (req, res) => {

    var communityId = req.body.communityId;

    var newItem = new Item({
        name: req.body.name,
        imgURL: req.body.imgURL,
        owner: req.body.ownerId
    });

    newItem.save()
    .then(item => {
        Community.findById(communityId)
        .then(community => {
            var resultItemsArray = [...community.items];
            resultItemsArray.push(item._id);
            community.update({items: resultItemsArray})
            .then(result => {
                community.items = resultItemsArray;
                console.log("You created an item in the commmunity!");
                return res.json({success: true, response: community});
            });
        });
    })
    .catch(err => {
        console.log(err);
        return res.json({failure: "database error"});
    });
});

// Create a new community and post to the database
router.post('/create-community', (req, res) => {

    var newCommunity = new Community ({
        name: req.body.name,
        description: req.body.description,
        users: [],
        items: [],
        requests: []
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

router.post('/new-request', (req, res) => {

    var communityId = req.body.communityId;

    var newRequest = new Request({
        owner: req.body.ownerId,
        text: req.body.text
    });

    newRequest.save()
    .then(request => {
        Community.findById(communityId)
        .then(community => {
            var resultRequestArray = [...community.requests];
            resultRequestArray.push(request._id);
            community.update({requests: resultRequestArray})
            .then(result => {
                console.log("HERE@!!!!")
                community.requests = resultRequestArray;
                console.log("Request added to database");
                return res.json({success: true, response: community});
            })
        });
    })
    .catch(err => {
        console.log(err);
        return res.json({failure: "database error"});
    });
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
