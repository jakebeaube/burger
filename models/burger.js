var orm = require('./../config/orm');
// interface with ORM commands

var burger = {

	all: function(callback) {
		orm.selectAll('burgers', function(res) {
			callback(res);
		})
	},

	create: function(columns, burger, callback) {
		orm.insertOne('burgers', columns, burger, function(res) {
			callback(res);
		})
	},

	update: function(values, condition, callback) {
		var condition = 'id = ' + condition;
		var values = 'devoured = ' + values.devoured;
		orm.updateOne('burgers', values, condition, function(res) {
			callback(res);
		})
	}

}

module.exports = burger;