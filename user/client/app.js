var app = angular.module('app', ['ngResource','ngRoute','ngCookies','ngFileUpload']);

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
  .when('/learnersLicenceForm', {
    templateUrl: './views/learnerLicenseForm.html',
    controller: 'learnerLicenseFormController'
  })
  .when('/learnersLicenceForm1',{
    templateUrl: './views/learnerLicenseForm1.html',
    controller: 'learnerLicenseForm1'
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

app.factory('formData', function(){
  var data = null;

  return{
    getdata: function() {
      return data;
    },
    putdata: function(d) {
      data = d;
    }
  }
})

app.controller("mainController", function($scope, $location) {
  $scope.page = "home";
});
