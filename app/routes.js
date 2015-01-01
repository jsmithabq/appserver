
var Plan = require('./models/plan');
var User = require('./models/user');
var Profile = require('./models/profile');

module.exports = function(app) {
  // API routes:
  app.get('/api/users', function(req, res) {
    User.find(function(err, users) {
      if (err)
        res.send(err);
      res.json(users);
    });
  });
  app.get('/api/profiles', function(req, res) {
    Profile.find(function(err, profiles) {
      if (err)
        res.send(err);
      res.json(profiles);
    });
  });
  app.get('/api/plans', function(req, res) {
    User.find(function(err, plans) {
      if (err)
        res.send(err);
      res.json(plans);
    });
  });

  // Route to handle creating goes here (app.post)...
  // Route to handle delete goes here (app.delete)...

  // Web front-end routes:
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load 'public/index.html'
  });
};

