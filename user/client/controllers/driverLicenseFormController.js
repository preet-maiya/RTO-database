var app = angular.module('app')

app.controller('driverLicenseFormController', function($scope,$http,$location,$cookieStore, formData){
  $scope.err=""
  $scope.list = ["KA01 - Koramangala, Bangalore","KA02 - Rajajinagar, Bangalore","KA03 - Indiranagar, Bangalore","KA04 - Yeshwanthpur, Bangalore","KA05 - Jayanagar, Bangalore","KA06 - Tumkur","KA07 - Kolar","KA08 - Kolar Gold Fields","KA09 - Mysore","KA10 - Chamrajnagar","KA11 - Mandya","KA12 - Madikeri","KA13 - Hassan","KA14 - Shimoga","KA15 - Sagar","KA16 - Chitradurga","KA17 - Davangere","KA18 - Chickmagalur","KA19 - Mangalore","KA20 - Udupi","KA21 - Puttur","KA22 - Belgaum","KA23 - Chikkodi","KA24 - Bailhongal","KA25 - Dharwad","KA26 - Gadag","KA27 - Haveri","KA28 - Vijapura","KA29 - Bagalkot","KA30 - Karwar","KA31 - Sirsi","KA32 - Kalaburagi","KA33 - Yadgir","KA34 - Bellary","KA35 - Hospet","KA36 - Raichur","KA37 - Koppal","KA38 - Bidar","KA39 - Bhalki","KA40 - Chikkaballapur","KA41 - Kengeri","KA42 - Ramanagar, Bangalore","KA43 - Devanahalli, Bangalore","KA44 - Tiptur, Tumkur district","KA45 - Hunsur, Mysore District","KA46 - Sakleshpur, Hassan District","KA47 - Honnavar, Uttarakannada District","KA48 - Jamkhandi, Bagalkote District","KA49 - Gokak, Belguam District","KA50 - Yelhanka, Bangalore","KA51 - Banneraghatta, Bangalore","KA52 - Nelamangala, Bangalore District","KA53 - K.R.Puram, Bangalore","KA54 - Nagamangala, Mandya District","KA55 - Mysore","KA56 - Basavakalyan","KA57 - Shantinagar, Bangalore","KA58 - Banashankari","KA59 - Chamrajpet, Bengaluru Dist - 560019","KA60 - R.T. Nagar, Bengaluru District","KA61 - Marathahalli","KA62 - Surathkal, Mangaluru","KA63 - Hubballi - 580026","KA64 - Madhugiri, Tumakuru District - 572132","KA65 - Dandeli - 581325","KA66 - Tarikere, Chikkamagaluru District"]
  $scope.list_type = ["MC 50CC-Motorcycle 50CC", "MC EX50CC-Motorcycle more than 50CC", "FVG-Motorcycle gearless", "MCWG-Motorcycle with gear", "LMV-Light Motor Vehicle", "LMVNT-Light motor vehicle (Non Transport)", "LMVTR-Light motor vehicle (Transport)", "MGV-Medium goods vehicle", "HMV-Heavy motor vehicle", "HPMV-Heavy Passenger Motor Vehicle", "HTV-Heavy Trasnport Vehicle"]
  var data1={
    user: $cookieStore.get('user'),
    mobile: $scope.mobile,
    perm_addr: $scope.perm_address,
    perm_city: $scope.perm_city,
    perm_pin: $scope.perm_pin,
    temp_addr: $scope.temp_address,
    temp_city: $scope.temp_city,
    temp_pin: $scope.temp_pin,
  }

  $scope.next = function(){

    $scope.copy_addr = function(){
    if($scope.copy){
      $scope.temp_addr = $scope.perm_addr;
      $scope.temp_city = $scope.perm_city;
      $scope.temp_pin = $scope.perm_pin;
      $scope.temp_addr = "google"
    }
  }
    formData.putdata(data1);
  if(data1.fname==null || data1.lname==null || data1.perm_addr==null || data1.perm_city===null || data1.perm_pin===null || data1.mobile===null || data1.type===null)
  $scope.err = "One or more required fields missing!";
  else{
    //$scope.err="";
  $http({
    url: '/driversLicence',
    method: 'post',
    data:{'data': data1}
  }).then(function(data){
    if(data.data.success){
      console.log(data.data);
      $location.path('/LandingPage').replace();
      $scope.err = "See Cosole";
    }
    else{
      $scope.err = "Already applied for this LL number!!"
    }
  })
}}
$scope.getDetails = function() {
  $http({
    url: '/getLearnersLicenceDetails',
    method: 'GET',
    params: {no:$scope.ll_no}
  }).then(function(data){
    if(data.data.success){
      if(data.data.data.length>0){
      $scope.fname = data.data.data[0].fname;
      $scope.lname = data.data.data[0].lname;
      $scope.gender = data.data.data[0].gender;
      $scope.type = data.data.data[0].type;
      $scope.rto = data.data.data[0].rto;
      $scope.aadhar = data.data.data[0].aadhar;
      $scope.mobile = data.data.data[0].mobile;
      $scope.perm_addr = data.data.data[0].perm_addr;
      $scope.perm_city = data.data.data[0].perm_city;
      $scope.perm_pin = data.data.data[0].perm_pin;
      data1.fname = data.data.data[0].fname;
      data1.lname = data.data.data[0].lname;
      data1.gender = data.data.data[0].gender;
      data1.type = data.data.data[0].type;
      data1.rto = data.data.data[0].rto;
      data1.mobile = data.data.data[0].mobile;
      data1.perm_addr = data.data.data[0].perm_addr;
      data1.perm_city = data.data.data[0].perm_city;
      data1.perm_pin = data.data.data[0].perm_pin;
      data1.aadhar = data.data.data[0].aadhar;
      data1.id_proof = data.data.data[0].id_proof;
      data1.age_proof = data.data.data[0].age_proof;
      data1.ll_no = data.data.data[0].application_no;
      //data1.fname = data.data.data[0].fname;
      //console.log(data)}
    }
      else {$scope.error = "Not applicable yet!";}

    }
  })
}
});
