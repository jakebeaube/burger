var express = require('express');
var router = express.Router();
var burger = require('./../models/burger');

router.get('/', function(req, res) {
	res.redirect('/index');
});

router.get('/index', function(req, res) {
	burger.all(function(data) {
		var hbsObj = { burgers: data} ;
		res.render('index', hbsObj);
	});
});

router.post('/index/create', function(req, res) {
	burger.create(['burger_name', 'devoured', 'created_on'], [req.body.burger_name, '0', 'CURRENT_TIMESTAMP'], function(data) {
		res.redirect('/index');	
	});
});

router.put('/index/update/:id', function(req, res) {
	var condition = req.params.id;
	burger.update({devoured: 1}, condition, function() {
		res.redirect('/index');
	});
});

module.exports = router;