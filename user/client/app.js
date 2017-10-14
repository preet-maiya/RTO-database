var app = angular.module('app', ['ngResource','ngRoute','ngCookies']);

app.config(function($routeProvider){
  $routeProvider
  .when('/login', {
    templateUrl:'./views/userLogin.html',
    controller: 'userController'
  })
  .when('/LandingPage', {
    templateUrl: './views/LandingPage.html',
    controller: 'landingPageController'
  })
  .when('/register', {
    templateUrl: './views/userRegister.html',
    controller: 'userRegisterController'
  })
  /*.when('/learnersLicence', {
    templateUrl: './views/learnersLicenceForm.html'
    controller: 'learnersLicenceFormController'
  })*/
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
