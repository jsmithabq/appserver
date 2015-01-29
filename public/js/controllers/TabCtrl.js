
angular.module('TabCtrl', []).controller('TabController', function ($scope, $http) {
  $scope.placeholder = 'Placeholder...';
  $scope.loadCountries = function() {
    $http.get('api/africa/country').success (function (data) {
      $scope.countries = [];
      for (var i = 0; i < data.length; i++) {
        $scope.countries.push(data[i].country);
      }
      console.log('Define countries...');
      console.log('Countries: ', $scope.countries);
    }).error(function () {
      alert('Unexpected error retrieving countries.');
    });
  }
  var self = this;
  self.tab1 = {};
  self.tab1.distributor = 'Acme';
  self.tab1.region = 'West';
  self.tab1.countriesOption = {
    'type': 'select', 
    'label': 'Countries:',
    'name': 'country',
    'value': 'Algeria', 
  };
  self.tab1.countries = $scope.loadCountries();
  self.tab1_submit = function() {
    console.log('User clicked submit for ', self.tab1);
    console.log('User clicked submit with selection', self.tab1.fruit.value);
  };
  self.tab2 = {};
  self.tab2.country = 'Africa';
  self.tab2.irrigation = 'Ditch';
  self.tab2.nuts = {
    'type': 'select', 
    'label': 'Nuts:',
    'name': 'tab2.nuts',
    'value': 'Brazil', 
    'values': ['Almond', 'Brazil', 'Pecan', 'Walnut']
  };
  self.tab2_submit = function() {
    console.log('User clicked submit for ', self.tab2);
    console.log('User clicked submit with selection', self.tab2.nuts.value);
  };
  self.tab3 = {};
});

