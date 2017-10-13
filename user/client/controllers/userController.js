var app = angular.module("app");

app.controller('userController', function($scope, $http, $location, ActiveUser){
  $scope.page = "Login";
  $scope.userid="";
  $scope.password="";
  $scope.error="";
  $scope.register = function () {
    $scope.userid="preetam"
    $location.path('/register').replace();
  };
  $scope.login = function() {
    $http({
      url: '/login',
      method: 'post',
      data: {"userid": $scope.userid, "password": $scope.password}

    }).then(function(data){
    if(data.data===true){
        $scope.error = ''
        ActiveUser.setuser($scope.userid);
        $location.path('/LandingPage').replace();
        $scope.$apply()
    }
    else
    //$scope.userid="preetam"
    $scope.error = 'Username or password incorrect'
},function(err){})
}
})
