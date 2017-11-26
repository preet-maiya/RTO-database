var app = angular.module("app");

app.controller('policeLoginController', function($scope, $http, $location, $cookieStore, ActiveUser){
  if($cookieStore.get('police')!=null){
    $location.path('/fine').replace();
  }
  $scope.user = function(){
    $location.path('/login').relace();
  }
  $scope.page = "Login";
  $scope.userid=="";
  $scope.password="";
  $scope.error="";
  $scope.register = function () {
    $location.path('/policeRegister').replace();
  };
  $scope.login = function() {
    $http({
      url: '/policeLogin',
      method: 'post',
      data: {"userid": $scope.userid, "password": $scope.password}

    }).then(function(data){
    if(data.data===true){
        $scope.error = ''
        ActiveUser.setuser($scope.userid);
        $cookieStore.put('user', $scope.userid)
        $location.path('/fines').replace();
        $scope.$apply()
    }
    else
    //$scope.userid="preetam"
    $scope.error = 'Username or password incorrect'
},function(err){})
}
})
