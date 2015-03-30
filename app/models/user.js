
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
  {
    userid : {type : String, default: ''},
    password : {type : String, default: ''},
    name : {type : String, default: ''},
    role : {type : String, default: ''},
    style : {type : String, default: 'Adobe'}
  }, 
  {collection: 'user'}
);
var User = mongoose.model('User', userSchema);

module.exports = User;
