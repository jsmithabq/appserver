
var mongoose = require('mongoose');
db = mongoose.createConnection('mongodb://appservertest:appservertest@ds029811.mongolab.com:29811/appserver');
db.on('error', console.error.bind(console, 'connection error!'));
db.once('open', function() {
  var userSchema = new mongoose.Schema({
    name: String,
    role: String,
    style: String
  });
  var User = db.model('user', userSchema);
  User.find(function(err, users) {
    if (err) {
     console.log(err);
    } else {
      mongoose.connection.close();
      console.log(users);
      mongoose.disconnect();
    }
  });
});

