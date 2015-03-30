
angular.module('UserService',  []).factory('User', ['$http', function($http) {
  return {
    // Retrieve all users:
    get : function() {
      return $http.get('/api/users');
    },
    // Create a new user:
    create : function(userData) {
      return $http.post('/api/users', userData);
    },
    // Delete a user:
    delete : function(id) {
      return $http.delete('/api/users/' + id);
    },
    // Retrieve a user:
    get : function(id) {
      return $http.get('/api/users/' + id);
    },
    // Update a user:
    put : function(id) {
      return $http.put('/api/users/' + id);
    }
  }
}]);

