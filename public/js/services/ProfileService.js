
angular.module('ProfileService',  []).factory('Profile', ['$http', function($http) {
  return {
    // GET all profiles:
    get : function() {
      return $http.get('/api/profiles');
    },
    // POST and create a new profile:
    create : function(profileData) {
      return $http.post('/api/profiles', profileData);
    },
    // DELETE a profile:
    delete : function(id) {
      return $http.delete('/api/profiles/' + id);
    }
  }
}]);

