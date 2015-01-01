
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
      })
      .when('/plans', {
        templateUrl: 'views/plan.html',
        controller: 'PlanController'
      })
      .when('/users', {
        templateUrl: 'views/user.html',
        controller: 'UserController'
      })
      .when('/profiles', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileController'
      });
    $locationProvider.html5Mode(true);
}]);

