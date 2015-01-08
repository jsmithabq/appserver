
var mongoose = require('mongoose');

var australiaSchema = new mongoose.Schema(
  {state: String, capital: String, population: Number, area: Number}, 
  {collection: 'australia'}
);
var Australia = mongoose.model('Australia', australiaSchema);

module.exports = Australia;
