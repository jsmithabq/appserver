
var mongoose = require('mongoose');

module.exports = mongoose.model('Profile', {
  style: {type : String, default: ''},
  bkg_bg: {type : String, default: ''},
  gen_by: {type : String, default: ''}
});
