var app = angular.module("app");

app.controller('userFinesController', function($scope, $resource, $cookieStore,$location, ActiveUser,formData){

  var user =  $cookieStore.get('user');
  var name = $resource('/fines');
  name.query({user:user}, function(results){
    $scope.fines = results;
  })
})
