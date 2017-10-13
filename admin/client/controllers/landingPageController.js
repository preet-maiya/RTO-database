var app = angular.module("app");

app.controller('landingPageController', function($resource,$scope){
  var list = $resource('/get_all')
  var users = []
  list.query({}, function(result) {
    users = result;
    $scope.l=users
  });
})
