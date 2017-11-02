var app =angular.module('app')

app.controller('learnerLicenseController', function($scope,$resource,$location,$window,$http){
  var details = []
  var list = $resource('/learnerList')
  list.query(function(results){
    $scope.l=results
    details = results
  })
  $scope.approve = function(name, no)
  {
    console.log('approve')
    $http({
  url: '/approve',
  method: 'post',
  data:{'user': name,'no': no }
}).then(function(data){
  if(data.data.success){
    $window.alert('Approved user '+name+' for learners license!')
  }
  else {
    $window.alert('Error: '+data.data.error)
  }
})
  }
  /*$scope.approve = function(no)
  {
    $http({
  url: '/delete',
  method: 'post',
  data:{'no': no }
}).then(function(data){
  if(data.data.success){
    $window.alert('Deleted user '+name+' for learners license!')
  }
  else {
    $window.alert('Error: '+data.data.error)
  }
})
  }*/
})
