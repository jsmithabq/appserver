
var mongo = require('mongodb');
var mc = mongo.MongoClient;
mc.connect('mongodb://appservertest:appservertest@ds029811.mongolab.com:29811/appserver', function(err, db) {
  if (err)
    console.log(err);
  db.createCollection('user', { strict: true, capped: true, max: 10 }, function(err, collection) {
  });
  db.createCollection('africa', { strict: true, capped: true, max: 60 }, function(err, collection) {
  });
  db.createCollection('australia', { strict: true, capped: true, max: 10 }, function(err, collection) {
  });
  db.close();
});

