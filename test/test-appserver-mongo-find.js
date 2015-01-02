
var mongo = require('mongodb');
var mc = mongo.MongoClient;
mc.connect('mongodb://appservertest:appservertest@ds029811.mongolab.com:29811/appserver', function(err, db) {
  if (err)
    console.log(err);
  var usersCollection = db.collection('User');
  usersCollection.find().toArray(function(err, users) {});
    users.forEach(function(user) {
      console.log(user);
  });
  console.log('Disconnecting...');
  mc.disconnect();
});

