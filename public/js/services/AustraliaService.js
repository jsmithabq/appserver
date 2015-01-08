
angular.module('AustraliaService',  []).factory('Australia', ['$http', function($http) {
  return {
    // GET all states in Australia:
    get : function() {
      return $http.get('/api/australia');
    },
  }
}]);
