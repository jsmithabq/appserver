
angular.module('MainCtrl', []).controller('MainController', function ($scope) {
  $scope.tagline = 'Start here...';
  $scope.submit_tab1 = function() {
    console.log('User clicked submit with ', $scope.tab1);
    console.log('User clicked submit with selection', $scope.tab1.fruit.value);
  };
  $scope.submit_tab2 = function() {
    console.log('User clicked submit with ', $scope.tab2);
    console.log('User clicked submit with selection', $scope.tab2.nuts.value);
  };
  $scope.tab1 = {};
  $scope.tab1.distributor = 'Acme';
  $scope.tab1.region = 'West';
  $scope.tab1.fruit = {
    'type': 'select', 
    'label': 'Fruit:',
    'name': 'tab1.fruit',
    'value': 'Apple', 
    'values': ['Apple', 'Banana', 'Peach', 'Strawberry'] 
  };
  $scope.tab2 = {};
  $scope.tab2.country = 'Africa';
  $scope.tab2.irrigation = 'Ditch';
  $scope.tab2.nuts = {
    'type': 'select', 
    'label': 'Nuts:',
    'name': 'tab2.nuts',
    'value': 'Brazil', 
    'values': ['Almond', 'Brazil', 'Pecan', 'Walnut'] 
  };
  $scope.tab3 = {};
});

