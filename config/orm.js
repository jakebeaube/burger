var connection = require('./../config/connection');

var orm = {
  selectAll: function(table, callback) {
    connection.query('SELECT * FROM ' + table, function(err, result){
      if (err) throw err;
      callback(result);
    });
  },

  insertOne: function(table, columns, values, callback) {
    var queryString = "INSERT INTO ";
    queryString += table;
    queryString += ' (';
    queryString += columns;
    queryString += ') VALUES (';
    queryString += '"' + values[0] + '", "' + values[1] + '", ' + values[2];
    queryString += ')';
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  updateOne: function(table, values, condition, callback) {
    var queryString = 'UPDATE ';
    queryString += table;
    queryString += ' SET ';
    queryString += values;
    queryString += ' WHERE ';
    queryString += condition;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      callback(result);
    });
  }

};

module.exports = orm;