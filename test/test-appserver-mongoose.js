
var mongoose = require('mongoose');
mongoose.connect('mongodb://appservertest:appservertest@ds029811.mongolab.com:29811/appserver');

var Profile = mongoose.model('Profile', {
  style: String,
  con_bg: String,
  bkg_bg: String,
  gen_bg: String,
  lgo_bg: String,
  bar_bg: String,
  hvr_bg: String,
  sel_bg: String,
  hvr_fg: String,
  cls_fg: String,
  bar_fg: String,
  lgo_fg: String,
  lnk_fg: String,
  row_fg: String
});
var adobe = new Profile({
  style: 'Adobe',
  con_bg: '#BFBFBF',
  bkg_bg: '#D1C9C9',
  gen_bg: '#B2A4A4',
  lgo_bg: '#AE8B8B',
  bar_bg: '#986265',
  hvr_bg: '#784A4D',
  sel_bg: '#D4C5C5',
  hvr_fg: '#733535',
  cls_fg: '#732525',
  bar_fg: '#580E0E',
  lgo_fg: '#732525',
  lnk_fg: '#732525',
  row_fg: '#732525'
});
var User = mongoose.model('User', {
  name: String,
  role: String,
  style: String
});
var dick = new User({name: 'Dick', role: 'planner', style: 'Adobe'});
var jane = new User({name: 'Jane', role: 'pilot', style: 'Adobe'});
var tom = new User({name: 'Tom', role: 'pilot', style: 'Adobe'});
var docs = [adobe, dick, jane, tom];
/*
var count = 0;
docs.forEach(function(doc) {
  doc.save(function(err) {
    count++;
    if (count == docs.length) {
      mongoose.disconnect();
    }
  });
});
*/
