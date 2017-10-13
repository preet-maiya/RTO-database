var app = angular.module("app");

app.controller('landingPageController', function($scope, $resource, ActiveUser){
  var username = ActiveUser.getuser();
  $scope.user = username;
})
