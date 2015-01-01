
var mongoose = require('mongoose');

module.exports = mongoose.model('Plan', {
  name : {type : String, default: ''},
  date : {type : String, default: ''}
});
