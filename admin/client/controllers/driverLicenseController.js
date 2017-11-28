var app =angular.module('app')

app.controller('driverLicenseController', function($scope,$resource,$location,$window,$http){
  var details = []
  var list = $resource('/driverList')
  list.query(function(results){
    $scope.l=results
    details = results
  })
  $scope.approve = function(name, no, ll)
  {
    console.log('approve')
    $http({
  url: '/approveDriver',
  method: 'post',
  data:{'user': name,'no': no, 'll': ll }
}).then(function(data){
  if(data.data.success){
    $window.alert('Approved user '+name+' for drivers license!')
  }
  else {
    $window.alert('Error: '+data.data.error)
  }
})
  }
  $scope.delete = function(no)
  {
    $http({
  url: '/deleteDriver',
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
  }
})
