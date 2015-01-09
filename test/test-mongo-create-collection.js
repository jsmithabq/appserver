
var cmdArgs = {};
var args = process.argv.slice(2);
args.forEach(function (val, index, array) {
  /*console.log(index + ': ' + val);*/
  if (val.indexOf('=') != -1 && val.indexOf('=') == val.lastIndexOf('=')) {
    var arg = val.split('=');
    /*console.log('key = ' + arg[0]);
    console.log('value = ' + arg[1]);*/
    cmdArgs[arg[0]] = arg[1];
  } else {
    console.log("Invalid argument: '" + val + "'");
    process.exit(1);
  }
});
console.log('Number of arguments = ' + Object.keys(cmdArgs).length);
console.log(cmdArgs);
if (Object.keys(cmdArgs).length != 1) {
  console.log('Incorrect number of arguments (should be 1): ' + Object.keys(cmdArgs).length);
  process.exit(1);
}

/*
Cap the tables to prevent unbounded insertions.
*/

var mongo = require('mongodb');
var mc = mongo.MongoClient;
mc.connect('mongodb://appservertest:appservertest@ds029811.mongolab.com:29811/appserver',
function(err, db) {
  if (err) { console.log(err); return; }
  if (cmdArgs.collection == 'user' || cmdArgs.collection == 'all') {
    db.createCollection('user', {strict: true, capped: true, size: 50000, max: 50},
    function(err, collection) {
      if (err) { console.log(err); return; }
    });
  }
  if (cmdArgs.collection == 'profile' || cmdArgs.collection == 'all') {
    db.createCollection('profile', {strict: true, capped: true, size: 50000, max: 20},
    function(err, collection) {
      if (err) { console.log(err); return; }
    });
  }
  if (cmdArgs.collection == 'africa' || cmdArgs.collection == 'all') {
    db.createCollection('africa', {strict: true, capped: true, size: 50000, max: 60},
    function(err, collection) {
      if (err) { console.log(err); return; }
    });
  }
  if (cmdArgs.collection == 'australia' || cmdArgs.collection == 'all') {
    db.createCollection('australia', {strict: true, capped: true, size: 50000, max: 10},
    function(err, collection) {
      if (err) { console.log(err); return; }
    });
  }
});
