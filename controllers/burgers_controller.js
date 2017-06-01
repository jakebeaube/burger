//routing for the app

var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req, res){
	res.redirect('burgers')
});

router.get('/burgers', function(req, res){
	burger.all(function(data){
		var handleBarObject = {burgers: data}
		console.log(handleBarObject);
		res.render('index', handleBarObject);
	});
});

//posts user added burgers
router.post('/burgers/create', function( req, res){
	burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function(data){
		res.redirect('/burgers');
	});
});

//changes state of burger to devoured
router.put('/burgers/update/:id', function(req, res){
	var state = 'id = ' + req.params.id;

	console.log('The Burger is ', state);

	burger.update({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;