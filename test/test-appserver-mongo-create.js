
/*
Cap the tables to prevent unbounded insertions.
*/

var mongo = require('mongodb');
var mc = mongo.MongoClient;
mc.connect('mongodb://appservertest:appservertest@ds029811.mongolab.com:29811/appserver',
function(err, db) {
  if (err) { console.log(err); return; }
  /*db.createCollection('user', {strict: true, capped: true, size: 50000, max: 50},
  function(err, collection) {
    if (err) { console.log(err); return; }
  });*/
  db.createCollection('profile', {strict: true, capped: true, size: 50000, max: 20},
  function(err, collection) {
    if (err) { console.log(err); return; }
  });
  /*db.createCollection('africa', {strict: true, capped: true, size: 50000, max: 60},
  function(err, collection) {
    if (err) { console.log(err); return; }
  });
  db.createCollection('australia', {strict: true, capped: true, size: 50000, max: 10},
  function(err, collection) {
    if (err) { console.log(err); return; }
  });*/
});
