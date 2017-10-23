var app = angular.module("app");

app.controller('userRegisterController', function($scope, $http, $location, ActiveUser){
  $scope.page = "Register";
  $scope.userid="";
  $scope.password="";
  $scope.password_again=""
  $scope.error="";
  $scope.register = function() {
    if($scope.password!==$scope.password_again)
    {
      $scope.error="Passwords don't match";
    }
    else{
      $http({
        url: '/register',
        method: 'post',
        data: {"userid": $scope.userid, "password": $scope.password, "fname": $scope.fname, "lname": $scope.lname}

      }).then(function(data){
        if(data.data===true){
          $scope.error = ''
          $location.path('/login').replace();
          $scope.$apply()
        }
        else
        $scope.error = 'Username already exists!'
      },function(err){})
      }
    }
})
