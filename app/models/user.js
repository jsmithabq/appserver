
var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  name : {type : String, default: ''},
  role : {type : String, default: ''},
  style : {type : String, default: 'Adobe'}
});
