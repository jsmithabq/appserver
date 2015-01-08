
var mongo = require('mongodb');
var mc = mongo.MongoClient;
mc.connect('mongodb://appservertest:appservertest@ds029811.mongolab.com:29811/appserver',
function(err, db) {
  if (err) { console.log(err); return; }
  db.collection('user').remove(function(err, result) {
    if (err) { console.log(err); return; }
  });
  db.collection('africa').remove(function(err, result) {
    if (err) { console.log(err); return; }
  });
  db.collection('australia').remove(function(err, result) {
    if (err) { console.log(err); return; }
  });
});
