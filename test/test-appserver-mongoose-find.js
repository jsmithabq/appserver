
var mongoose = require('mongoose');
db = mongoose.createConnection(
  'mongodb://appservertest:appservertest@ds029811.mongolab.com:29811/appserver');
db.on('error', console.error.bind(console, 'connection error!'));
db.once('open', function() {
  var userSchema = new mongoose.Schema(
    {name: String, role: String, style: String}, 
    {collection: 'user'}
  );
  var User = db.model('users', userSchema);
  User.find(function(err, users) {
    if (err) {
     return console.log(err);
    } else {
      console.log(users);
      mongoose.connection.close();
      mongoose.disconnect();
    }
  });
});

