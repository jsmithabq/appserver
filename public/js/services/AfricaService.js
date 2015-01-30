
angular.module('AfricaService',  []).factory('Africa', ['$http', function($http) {
  return {
    // GET all countries in Africa:
    get : function() {
      return $http.get('/api/africa');
    },
    // GET all countries in Africa, country projection only:
    get : function() {
      return $http.get('/api/africa/country');
    },
  }
}]);
