var app = angular.module("app");

app.controller('finesController', function($scope, $http, $location, $resource,$cookieStore){
$scope.list = ['KA01','KA02','KA03','KA04','KA05','KA06','KA07','KA08','KA09','KA10','KA11','KA12','KA13','KA14','KA15','KA16','KA17','KA18','KA19','KA20','KA21','KA22','KA23','KA24','KA25','KA26','KA27','KA28','KA29','KA30','KA31','KA32','KA33','KA34','KA35','KA36','KA37','KA38','KA39','KA40','KA41','KA42','KA43','KA44','KA45','KA46','KA47','KA48','KA49','KA50','KA51','KA52','KA53','KA54','KA55','KA56','KA57','KA58','KA59','KA60','KA61','KA62','KA63','KA64','KA65','KA66']
var name = $resource('/getViolations');
name.query(function(results){
  console.log(results);
  $scope.violations = results;
})
$scope.fine = function(){
  if($scope.rto=="" || $scope.no==null)
  {
    $scope.err = "Enter the vehicle number";
    return;
  }
  if($scope.violation_no==null || ($scope.violation_no<0 || $scope.violation_no>42) )
  {
    $scope.err = "Enter the correct violation number";
    return;
  }
  $scope.err = "";
  $http({
    url: '/fine',
    method: 'post',
    data: {"regno": $scope.rto+" "+$scope.no, "violation": $scope.violation_no, "police": $cookieStore.get('police')}
  }).then(function(data){
  if(data.data.success===true){
      $scope.success = "Successfully registered";
      $scope.no = "";
      $scope.violation_no = "";
      $scope.rto = "";
  }
  else
  //$scope.userid="preetam"
  $scope.err = 'Registration Unsuccessful'
  console.log(data.data);
},function(err){})
}

$scope.logout = function(){
  $cookieStore.put('police', null);
  $location.path('/policeLogin').replace();
}
})
