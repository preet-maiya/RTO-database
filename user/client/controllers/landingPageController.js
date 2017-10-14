var app = angular.module("app");

app.controller('landingPageController', function($scope, $resource, $cookieStore,$location, ActiveUser){
  var username = ActiveUser.getuser();
  var user =  $cookieStore.get('user');
  /*if(user===null)
  {
    $location.path('/login').replace();
  }*/
  var name = $resource('/get_name');
  name.query({user:user}, function(results){
    $scope.fnameCookie = results[0].fname;
    $scope.lnameCookie = results[0].lname;
  })
  $scope.logout = function(){
    $cookieStore.put('user', null);
    $location.path('/login').replace();
  }
})
