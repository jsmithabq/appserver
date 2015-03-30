
angular.module('ProfileService',  []).factory('Profile', ['$http', function($http) {
  return {
    // Retrieve all profiles:
    get : function() {
      return $http.get('/api/profiles');
    },
    // Create a new profile:
    create : function(profileData) {
      return $http.post('/api/profiles', profileData);
    },
    // Delete a profile:
    delete : function(id) {
      return $http.delete('/api/profiles/' + id);
    },
    // Retrieve a profile:
    get : function(id) {
      return $http.get('/api/profiles/' + id);
    },
    // Update a profile:
    put : function(id) {
      return $http.put('/api/profiles/' + id);
    }
  }
}]);

