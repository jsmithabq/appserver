
angular.module('PlanService',  []).factory('Plan', ['$http', function($http) {
  return {
    // GET all plans:
    get : function() {
      return $http.get('/api/plans');
    },
    // POST and create a new plan:
    create : function(planData) {
      return $http.post('/api/plans', planData);
    },
    // DELETE a plan:
    delete : function(id) {
      return $http.delete('/api/plans/' + id);
    }
  }
}]);

