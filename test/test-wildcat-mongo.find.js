
var mongo = require('mongodb');
var mc = mongo.MongoClient;
mc.connect('mongodb://wcfields:PermianBasinOdessa@ds061370.mongolab.com:61370/wildcat', function(err, db) {
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

