var mongo = require('mongodb');
var mc = mongo.MongoClient;

mc.connect('mongodb://appservertest:appservertest@ds029811.mongolab.com:29811/appserver',
function(err, db) {
  if (err)
    console.log(err);
  /*
  // JavaScript alternative to Mongo shell, e.g.:
  var states = db.australia.find( {}, {state: 1, _id: 0}).toArray();
  printjson(states);
  */
  var states = [];
  db.collection('australia', function(err, collection) {
    if (err)
      return console.log('error opening australia collection, err = ', err);
    collection.find({}, {state: 1, _id: 0}, function(err, cursor) {
      if (err)
        return console.log('error initiating find on australia, err = ', err);
      cursor.each(function(err, state) {
        if (err || !state) {
          if (err)
            console.log('error walking data, err = ', err);
          db.close();
          return;
        }
        states.push(state.state);
        console.log(state.state);
      });
    });
    console.log(states);
  });
});
