
var mongoose = require('mongoose');

var africaSchema = new mongoose.Schema(
  {country: String, capital: String, population: Number, area: Number}, 
  {collection: 'africa'}
);
var Africa = mongoose.model('Africa', africaSchema);

module.exports = Africa;
