
var mongo = require('mongodb');
var mc = mongo.MongoClient;
mc.connect('mongodb://appservertest:appservertest@ds029811.mongolab.com:29811/appserver',
function(err, db) {
  if (err)
    console.log(err);
  db.collection('user', function(err, collection) {
    if (err)
      return console.log('error opening user collection, err = ', err);
    collection.find({}, function(err, cursor) {
      if (err)
        return console.log('error initiating find on user, err = ', err);
      cursor.each(function(err, item) {
        if (err || ! item) {
          if (err)
            console.log('error walking data, err = ', err);
          db.close();
          return;
        }
        console.log(item);
      });
    });
  });
});
