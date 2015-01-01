
angular.module('DropdownCtrl', []).controller('DropdownController', function ($scope, $log) {
  $scope.items = [ // currently, not used
    'One',
    'Two',
    'Three'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
    $scope.status.isopen = open;
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
});

