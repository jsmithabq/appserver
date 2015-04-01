
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
      })
      .when('/africa', {
        templateUrl: 'views/africa.html',
        controller: 'AfricaController'
      })
      .when('/australia', {
        templateUrl: 'views/australia.html',
        controller: 'AustraliaController'
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

/*
$routeProvider.when('/profile', {
    templateUrl: 'profile',
    controller: AController,
    resolve: {
         data: function ($q, theData) {
             return theData;
         }
    }
});*/
