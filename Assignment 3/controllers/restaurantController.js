var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/test/restaurants'); // connect to our database
var Restaurant = require('../models/Restaurant');



module.exports.index = function(req, res) {
    Restaurant.find().limit(25).exec(function(err, restaurants) {
        if (err)
            res.send(err);

        res.json(restaurants);
    });

};

module.exports.store =function(req, res) {

    var restaurant = new Restaurant();      // create a new instance of the restaurant model
    restaurant.name = req.body.name;  // set the restaurants name (comes from the request)
    restaurant.borough = req.body.borough;         // set the restaurants borough (comes from the request)
    restaurant.cuisine = req.body.cuisine;         // set the restaurants cuisine (comes from the request)
    restaurant.name = req.body.name;            // set the restaurants name (comes from the request)
    restaurant.restaurant_id = req.body.restaurant_id;   // set the restaurants restaurant_id (comes from the request)
    restaurant.grades.date = req.body.date;            // set the restaurants restaurant_id (comes from the request)
    restaurant.grades.grade = req.body.grade;           // set the restaurants restaurant_id (comes from the request)
    restaurant.grades.score = req.body.score;           // set the restaurants restaurant_id (comes from the request)
    restaurant.address.building = req.body.building;        // set the restaurants restaurant_id (comes from the request)
    restaurant.address.street = req.body.street;          // set the restaurants restaurant_id (comes from the request)
    restaurant.address.zipcode = req.body.zipcode;         // set the restaurants restaurant_id (comes from the request)
    restaurant.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'restaurant created!' });
    });

};


module.exports.show = function(req, res) {
    Restaurant.findById(req.params._id, function(err, restaurant) {

        if (err)
            res.send(err);
        res.json(restaurant);
    });
};

module.exports.update = function(req, res) {

    // use our restaurant model to find the restaurant we want
    Restaurant.findById(req.params._id, function(err, restaurant) {

        if (err)
            res.send(err);

        restaurant.name = req.body.name;  // update the restaurants info
        restaurant.borough = req.body.borough;            // update the restaurants info
        restaurant.cuisine = req.body.cuisine;            // update the restaurants info
        restaurant.restaurant_id = req.body.restaurant_id;      // update the restaurants info

        // save the restaurant
        restaurant.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'restaurant updated!' });
        });

    });
};

module.exports.destroy = function(req, res) {
    Restaurant.remove({
        _id: req.params._id
    }, function(err, restaurant) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });

    module.exports.search=function(req, res) {

        Restaurant.findById(req.params.borough, function(err, restaurant) {

            if (err)
                res.send(err);

            res.json(restaurant);
        });
    };
};

