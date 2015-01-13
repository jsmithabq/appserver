
angular.module('TabCtrl', []).controller('TabController', function ($scope) {
  $scope.placeholder = 'Placeholder...';
  var self = this;
  self.tab1 = {};
  self.tab1.distributor = 'Acme';
  self.tab1.region = 'West';
  self.tab1.fruit = {
    'type': 'select', 
    'label': 'Fruit:',
    'name': 'fruit',
    'value': 'Apple', 
    'values': ['Apple', 'Banana', 'Peach', 'Strawberry']
  };
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

