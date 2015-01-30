
angular.module('TabCtrl', [])
.factory('TabControllerRetrieveCountries', function($q, $http) {
  var deferred = $q.defer();
  var countries = [];
  $http.get('api/africa/country').success (function (data) {
    for (var i = 0; i < data.length; i++) {
      countries.push(data[i].country);
    }
    //console.log('Countries: ', countries);
    deferred.resolve(countries);
  }).error(function () {
    alert('Unexpected error retrieving countries.');
  });
  return deferred.promise;
})
.factory('TabControllerRetrieveStates', function($q, $http) {
  var deferred = $q.defer();
  var states = [];
  $http.get('api/australia/state').success (function (data) {
    for (var i = 0; i < data.length; i++) {
      states.push(data[i].state);
    }
    //console.log('States: ', states);
    deferred.resolve(states);
  }).error(function () {
    alert('Unexpected error retrieving states.');
  });
  return deferred.promise;
})
.controller('TabController', function ($scope, TabControllerRetrieveCountries, TabControllerRetrieveStates) {
  $scope.placeholder = 'Placeholder...';
  var self = this;
  self.tab1 = {};
  //self.tab1.distributor = 'Acme';
  //self.tab1.region = 'West';
  self.tab1.countriesOption = {
    'type': 'select',
    'label': 'Countries:',
    'name': 'country'
  };
  TabControllerRetrieveCountries.then(function(countries) {
    self.tab1.countries = countries;
    self.tab1.country = self.tab1.countries[0];
  });
  self.tab1_submit = function() {
    console.log('User clicked submit for ', self.tab1);
    console.log('User clicked submit with selection', self.tab1.country);
  };
  self.tab2 = {};
  //self.tab2.country = 'Africa';
  //self.tab2.irrigation = 'Ditch';
  self.tab2.statesOption = {
    'type': 'select',
    'label': 'States:',
    'name': 'state'
  };
  TabControllerRetrieveStates.then(function(states) {
    self.tab2.states = states;
    self.tab2.state = self.tab2.states[0];
  });
  self.tab2_submit = function() {
    console.log('User clicked submit for ', self.tab2);
    console.log('User clicked submit with selection', self.tab2.state);
  };
  self.tab3 = {};
});

