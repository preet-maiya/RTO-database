var app = angular.module("app");

app.controller('landingPageController', function($scope, $resource, $cookieStore,$location, ActiveUser,formData){
  var username = ActiveUser.getuser();
  var user =  $cookieStore.get('user');
  if(user===null)
  {
    $location.path('/login').replace();
  }
  var name = $resource('/get_name');
  name.query({user:user}, function(results){
    $scope.fnameCookie = results[0].fname;
    $scope.lnameCookie = results[0].lname;
  })
  $scope.logout = function(){
    $cookieStore.put('user', null);
    $location.path('/login').replace();
  }

  $scope.learnersLicence = function(){
    /*$http({
      url: '/learnersLicenceForm',
      method: 'post',
      data:{'user': user}
    }).then(function(data){
      if(data.response)
      $location.path('/learnersLicenceForm.html').replace();
    })*/
    $location.path('/learnersLicenceForm').replace();
  }
  $scope.driversLicence = function() {
    $location.path('/driversLicenceForm').replace();
  }
  $scope.registerVehicle = function() {
    $location.path('/registerVehicleForm').replace();
  }

  $scope.userFines = function() {
    $location.path('/userFines').replace();
  }

  var name = $resource('/applied_learners');
  name.query({user:user}, function(results){
    $scope.applied_learners = results;
  })

  var name = $resource('/confirmed_learners');
  name.query({user:user}, function(results){
    $scope.confirmed_learners = results;
  })

  var name = $resource('/applied_drivers')
  name.query({user:user}, function(results){
    $scope.applied_drivers = results;
  })

  var name = $resource('/confirmed_drivers')
  name.query({user:user}, function(results){
    $scope.confirmed_drivers = results;
  })

  var name = $resource('/applied_vehicle');
  name.query({user:user}, function(results){
    $scope.applied_vehicle = results;
  })

  var name = $resource('/confirmed_vehicle');
  name.query({user:user}, function(results){
    $scope.confirmed_vehicle = results;
  })
})
