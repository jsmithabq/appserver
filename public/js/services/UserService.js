
angular.module('UserService',  []).factory('User', ['$http', function($http) {
  return {
    // GET all users:
    get : function() {
      return $http.get('/api/users');
    },
    // POST and create a new user:
    create : function(userData) {
      return $http.post('/api/users', userData);
    },
    // DELETE a user:
    delete : function(id) {
      return $http.delete('/api/users/' + id);
    }
  }
}]);

