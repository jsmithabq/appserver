
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
  {
    name : {type : String, default: ''},
    role : {type : String, default: ''},
    style : {type : String, default: 'Adobe'}
  }, 
  {collection: 'user'}
);
var User = mongoose.model('User', userSchema);

module.exports = User;
