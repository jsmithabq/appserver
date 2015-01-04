
angular.module('appserver', ['ui.bootstrap']);
angular.module('appserver').controller('DropdownCtrl', function ($scope, $log) {
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
