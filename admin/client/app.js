var app = angular.module('app', ['ngResource','ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/login', {
    templateUrl:'./views/adminLogin.html',
    controller: 'adminController'
  })
  .when('/LandingPage', {
    templateUrl: './views/LandingPage.html',
    controller: 'landingPageController'
  })
  .when('/learnerLicense', {
    templateUrl: './views/learnerLicense.html',
    controller: 'learnerLicenseController'
  })
  .otherwise({
   redirectTo: '/login'
 })
})

app.factory('ActiveUser', function() {
  var who = {
    user: null
  }
  return {
    getuser: function() {
      return who.user;
    },
    setuser: function(val) {
      who.user = val
    }
  }
})

app.controller("mainController", function($scope, $location) {
  $scope.page = "home";
});
