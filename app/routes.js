
var Africa = require('./models/africa');
var Australia = require('./models/australia');
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
  app.get('/api/africa', function(req, res) {
    Africa.find(function(err, africa) {
      if (err)
        res.send(err);
      res.json(africa);
    });
  });
  app.get('/api/australia', function(req, res) {
    Australia.find(function(err, australia) {
      if (err)
        res.send(err);
      res.json(australia);
    });
  });

  // Route to handle creating goes here (app.post)...
  // Route to handle delete goes here (app.delete)...

  // Web front-end routes:
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load 'public/index.html'
  });
};

