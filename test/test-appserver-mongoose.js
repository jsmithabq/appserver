
var mongoose = require('mongoose');
mongoose.connect('mongodb://appservertest:appservertest@ds029811.mongolab.com:29811/appserver');

/*
var country1 = new Africa({country: '', capital: '', population: 0, area, 0});

var Profile = mongoose.model('Profile', {style: String, bkg_bg: String, gen_bg: String});
var adobe = new Profile({style: 'Adobe', bkg_bg: '#D1C9C9', gen_bg: '#B2A4A4'});
var tom = new User({name: 'Tom', role: 'pilot', style: 'Adobe'});
var dick = new User({name: 'Dick', role: 'planner', style: 'Adobe'});
var jane = new User({name: 'Jane', role: 'pilot', style: 'Adobe'});
var docs = [adobe, tom, dick, jane];
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
