
var cmd_args = {};
if (process.argv.length == 3) {
  var args = process.argv.slice(2);
  args.forEach(function (val, index, array) {
    /*console.log(index + ': ' + val);*/
    if (val.indexOf('=') != -1 && val.indexOf('=') == val.lastIndexOf('=')) {
      var arg = val.split('=');
      /*console.log('key = ' + arg[0]);
      console.log('value = ' + arg[1]);*/
      cmd_args[arg[0]] = arg[1];
    } else {
      console.log("Invalid argument: '" + val + "'.");
      process.exit(1);
    }
  });
  console.log(cmd_args);
}

/*
Cap the tables to prevent unbounded insertions.
*/

var mongo = require('mongodb');
var mc = mongo.MongoClient;
mc.connect('mongodb://appservertest:appservertest@ds029811.mongolab.com:29811/appserver',
function(err, db) {
  if (err) { console.log(err); return; }
  if (cmd_args.collection == 'user' || cmd_args.collection == 'all') {
    db.createCollection('user', {strict: true, capped: true, size: 50000, max: 50},
    function(err, collection) {
      if (err) { console.log(err); return; }
    });
  }
  if (cmd_args.collection == 'profile' || cmd_args.collection == 'all') {
    db.createCollection('profile', {strict: true, capped: true, size: 50000, max: 20},
    function(err, collection) {
      if (err) { console.log(err); return; }
    });
  }
  if (cmd_args.collection == 'africa' || cmd_args.collection == 'all') {
    db.createCollection('africa', {strict: true, capped: true, size: 50000, max: 60},
    function(err, collection) {
      if (err) { console.log(err); return; }
    });
  }
  if (cmd_args.collection == 'australia' || cmd_args.collection == 'all') {
    db.createCollection('australia', {strict: true, capped: true, size: 50000, max: 10},
    function(err, collection) {
      if (err) { console.log(err); return; }
    });
  }
});
