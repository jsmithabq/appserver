
var mongoose = require('mongoose');
mongoose.connect('mongodb://wcfields:PermianBasinOdessa@ds061370.mongolab.com:61370/wildcat');
var Profile = mongoose.model('Profile', {style: String, bkg_bg: String, gen_bg: String});
var adobe = new Profile({style: 'Adobe', bkg_bg: '#D1C9C9', gen_bg: 'B2A4A4'});
var User = mongoose.model('User', {name: String, role: String, style: String});
var tom = new User({name: 'Tom', role: 'pilot', style: 'Adobe'});
var dick = new User({name: 'Dick', role: 'planner', style: 'Adobe'});
var jane = new User({name: 'Jane', role: 'pilot', style: 'Adobe'});
var Plan = mongoose.model('Plan', {name: String, date: String});
var plan1 = new Plan({name: 'Maintenance Flight #AF36', date: Date()});
var docs = [adobe, tom, dick, jane, plan1];
var count = 0;
docs.forEach(function(doc) {
  doc.save(function(err) {
    count++;
    if (count == docs.length) {
      mongoose.disconnect();
    }
  });
});
