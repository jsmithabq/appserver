
var mongoose = require('mongoose');

var australiaSchema = new mongoose.Schema(
  {state: String, capital: String, population: Number, area: Number}, 
  {collection: 'australia'}
);
var Australia = db.model('Australia', australiaSchema);

module.exports = Australia;
