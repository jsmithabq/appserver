
var mongoose = require('mongoose');
db = mongoose.createConnection('mongodb://wcfields:PermianBasinOdessa@ds061370.mongolab.com:61370/wildcat');
db.on('error', console.error.bind(console, 'connection error!'));
db.once('open', function() {
  var userSchema = new mongoose.Schema({
    name: String,
    role: String,
    style: String
  });
  var User = db.model('User', userSchema);
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

