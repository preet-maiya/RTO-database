var app =angular.module('app')

app.controller('vehicleController', function($scope,$resource,$location,$window,$http){
  var details = []
  var list = $resource('/vehicleList')
  list.query(function(results){
    $scope.l=results
    details = results
  })
})
