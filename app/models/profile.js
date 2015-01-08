
var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema(
  {
    style: {type : String, default: ''},
    bkg_bg: {type : String, default: ''},
    gen_bg: {type : String, default: ''}
  }, 
  {collection: 'profile'}
);
var Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
