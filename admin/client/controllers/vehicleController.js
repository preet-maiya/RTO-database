var app =angular.module('app')

app.controller('vehicleController', function($scope,$resource,$location,$window,$http){
  var details = []
  var list = $resource('/vehicleList')
  list.query(function(results){
    $scope.l=results
    details = results
  })
  $scope.approve = function(name,no,rto) {
    var seq = prompt("Give the sequence number: ");
    $http({
  url: '/vehiclenumber',
  method: 'post',
  data:{'user': name,'no': no, 'sequence': seq, 'rto': rto }
}).then(function(data){
  if(data.data.success){
    $window.alert('Gave user '+name+' a sequence and validated!')
  }
  else {
    $window.alert('Error: '+data.data.error)
  }
})
  }
})
