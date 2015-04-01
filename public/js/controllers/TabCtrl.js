
angular.module('TabCtrl', [])
.factory('TabControllerRetrieveCountries', function($q, $http) {
  var deferredCountries = $q.defer();
  var countries = [];
  $http.get('api/africa/country').success (function (data) {
    for (var i = 0; i < data.length; i++) {
      countries.push(data[i].country);
    }
    //console.log('Countries: ', countries);
    deferredCountries.resolve(countries);
  }).error(function () {
    alert('Unexpected error retrieving countries.');
  });
  return deferredCountries.promise;
})
.factory('TabControllerRetrieveStates', function($q, $http) {
  var deferredStates = $q.defer();
  var states = [];
  $http.get('api/australia/state').success (function (data) {
    for (var i = 0; i < data.length; i++) {
      states.push(data[i].state);
    }
    //console.log('States: ', states);
    deferredStates.resolve(states);
  }).error(function () {
    alert('Unexpected error retrieving states.');
  });
  return deferredStates.promise;
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
    'name': 'tab1-country'
  };
  TabControllerRetrieveCountries.then(function(countries) {
    self.tab1.countries = countries;
    self.tab1.country = self.tab1.countries[0];
    console.log('Default country: ', self.tab1.country);
  });
  self.tab1Submit = function() {
    console.log('User clicked submit for ', self.tab1);
    console.log('User clicked submit with selection', self.tab1.country);
    alert('User clicked submit with selection ' + self.tab1.country)
  };
  self.tab2 = {};
  //self.tab2.country = 'Africa';
  //self.tab2.irrigation = 'Ditch';
  self.tab2.statesOption = {
    'type': 'select',
    'label': 'States:',
    'name': 'tab2-state'
  };
  TabControllerRetrieveStates.then(function(states) {
    self.tab2.states = states;
    self.tab2.state = self.tab2.states[0];
    console.log('Default state: ', self.tab2.state);
  });
  self.tab2Submit = function() {
    console.log('User clicked submit for ', self.tab2);
    console.log('User clicked submit with selection', self.tab2.state);
    alert('User clicked submit with selection ' + self.tab2.state)
  };
  self.tab3 = {};
  self.tab3.stylesOption = {
    'type': 'select',
    'label': 'Style:',
    'name': 'tab3-style'
  };
  self.tab3.styles = [
    {value: 'adobe', text: 'Adobe'},
    {value: 'artic', text: 'Artic'},
    {value: 'atlantic', text: 'Atlantic'},
    {value: 'c4cr', text: 'C4CR'},
    {value: 'creamsicle', text: 'Creamsicle'},
    {value: 'desert', text: 'Desert'},
    {value: 'foam', text: 'Foam'},
    {value: 'overcast', text: 'Overcast'},
    {value: 'pacific', text: 'Pacific'}
  ];
  self.tab3.style = self.tab3.styles[0].value;
  self.changeStyle = function() {
    //var styleBox = document.getElementById("style");
    //var theme = String(styleBox.options[styleBox.selectedIndex].value);
    var styleBox = document.getElementById("tab3-tab3-styles");
    var theme = styleBox.options[styleBox.selectedIndex];
    var fileName = "style-" + theme.value + ".css";
    console.log("New style is: " + fileName);
    var head = document.head || document.getElementsByTagName("head")[0];
    var i, linkster;
    for (i = 0, linkster = document.getElementsByTagName("link"); i < linkster.length ; i++ ) {
      if ((linkster[i].rel.indexOf( "stylesheet" ) != -1) && linkster[i].id) {
        linkster[i].disabled = true;
        linkster[i].setAttribute("rel", "alternate stylesheet");
        if (linkster[i].id == "style-" + theme) {
          linkster[i].disabled = false;
          linkster[i].setAttribute("rel", "stylesheet");
        }
      }
    }
  };
  self.tab3Submit = function() {
    console.log('User clicked submit for ', self.tab3);
    console.log('User clicked submit with selection', self.tab3.style);
    var pos = self.tab3.styles.map(function(e) { return e.value; })
      .indexOf(self.tab3.style);
    alert('User clicked submit with selection ' + self.tab3.styles[pos].text);
    var name = String(document.getElementsByName("profile-name")[0].value);
    console.log("New name is: " + name);
    var currentPassword = String(document.getElementsByName("profile-currentpassword")[0].value);
    console.log("New name is: " + currentPassword);
    var newPassword = String(document.getElementsByName("profile-newpassword")[0].value);
    console.log("New password #1 is: " + newPassword);
    var newPassword2 = String(document.getElementsByName("profile-newpassword2")[0].value);
    console.log("New password #2 is: " + newPassword2);
    var styleBox = document.getElementById("tab3-tab3-styles");
    var theme = styleBox.options[styleBox.selectedIndex];
    console.log("New theme name is: " + theme.text);
    console.log("New theme value is: " + theme.value);
  };
});

