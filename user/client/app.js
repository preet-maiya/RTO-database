var app = angular.module('app', ['ngResource','ngRoute','ngCookies','ngFileUpload']);

app.config(function($routeProvider, $locationProvider){
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
  .when('/driversLicenceForm', {
    templateUrl: './views/driverLicenseForm.html',
    controller: 'driverLicenseFormController'
  })
  .when('/registerVehicleForm', {
    templateUrl: './views/registerVehicle.html',
    controller: 'registerVehicleController'
  })
  .when('/userFines', {
    templateUrl: './views/userFines.html',
    controller: 'userFinesController'
  })
  .when('/policeLogin', {
    templateUrl: './views/policeLogin.html',
    controller: 'policeLoginController'
  })
  .when('/policeRegister', {
    templateUrl: './views/policeRegister.html',
    controller: 'policeRegisterController'
  })
  .when('/fines', {
    templateUrl: "./views/fines.html",
    controller: "finesController"
  })
  .otherwise({
   redirectTo: '/login'
 })
 //$locationProvider.html5Mode(true);
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
