var app = angular.module("app");

app.controller('landingPageController', function($resource,$scope,$location){
  var list = $resource('/get_all')
  var users = []
  list.query({}, function(result) {
    users = result;
    $scope.l=users
  });

  $scope.learnerLicense = function(){
    $location.path('/learnerLicense').replace()
  }
})
