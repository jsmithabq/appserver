var mongo = require('mongodb');
var mc = mongo.MongoClient;

mc.connect('mongodb://appservertest:appservertest@ds029811.mongolab.com:29811/appserver',
function(err, db) {
  if (err)
    console.log(err);
  var countries = db.africa.find( {}, {country: 1, _id: 0}).toArray();
  db.collection('africa', function(err, collection) {
    if (err)
      return console.log('error opening africa collection, err = ', err);
    collection.find({}, {country: 1, _id: 0}, function(err, cursor) {
      if (err)
        return console.log('error initiating find on africa, err = ', err);
      cursor.each(function(err, country) {
        if (err || ! country) {
          if (err)
            console.log('error walking data, err = ', err);
          db.close();
          return;
        }
        countries.push(country.country);
        console.log(country.country);
      });
    });
    console.log(countries);
  });
  */
  printjson(countries);
});
