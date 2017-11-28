var app = angular.module('app')

app.controller('learnerLicenseFormController', function($scope,$http,$location,$cookieStore, formData){
  $scope.err=""
  $scope.list = ["KA01 - Koramangala, Bangalore","KA02 - Rajajinagar, Bangalore","KA03 - Indiranagar, Bangalore","KA04 - Yeshwanthpur, Bangalore","KA05 - Jayanagar, Bangalore","KA06 - Tumkur","KA07 - Kolar","KA08 - Kolar Gold Fields","KA09 - Mysore","KA10 - Chamrajnagar","KA11 - Mandya","KA12 - Madikeri","KA13 - Hassan","KA14 - Shimoga","KA15 - Sagar","KA16 - Chitradurga","KA17 - Davangere","KA18 - Chickmagalur","KA19 - Mangalore","KA20 - Udupi","KA21 - Puttur","KA22 - Belgaum","KA23 - Chikkodi","KA24 - Bailhongal","KA25 - Dharwad","KA26 - Gadag","KA27 - Haveri","KA28 - Vijapura","KA29 - Bagalkot","KA30 - Karwar","KA31 - Sirsi","KA32 - Kalaburagi","KA33 - Yadgir","KA34 - Bellary","KA35 - Hospet","KA36 - Raichur","KA37 - Koppal","KA38 - Bidar","KA39 - Bhalki","KA40 - Chikkaballapur","KA41 - Kengeri","KA42 - Ramanagar, Bangalore","KA43 - Devanahalli, Bangalore","KA44 - Tiptur, Tumkur district","KA45 - Hunsur, Mysore District","KA46 - Sakleshpur, Hassan District","KA47 - Honnavar, Uttarakannada District","KA48 - Jamkhandi, Bagalkote District","KA49 - Gokak, Belguam District","KA50 - Yelhanka, Bangalore","KA51 - Banneraghatta, Bangalore","KA52 - Nelamangala, Bangalore District","KA53 - K.R.Puram, Bangalore","KA54 - Nagamangala, Mandya District","KA55 - Mysore","KA56 - Basavakalyan","KA57 - Shantinagar, Bangalore","KA58 - Banashankari","KA59 - Chamrajpet, Bengaluru Dist - 560019","KA60 - R.T. Nagar, Bengaluru District","KA61 - Marathahalli","KA62 - Surathkal, Mangaluru","KA63 - Hubballi - 580026","KA64 - Madhugiri, Tumakuru District - 572132","KA65 - Dandeli - 581325","KA66 - Tarikere, Chikkamagaluru District"]
  $scope.list_type = ["MC 50CC-Motorcycle 50CC", "MC EX50CC-Motorcycle more than 50CC", "FVG-Motorcycle gearless", "MCWG-Motorcycle with gear", "LMV-Light Motor Vehicle", "LMVNT-Light motor vehicle (Non Transport)", "LMVTR-Light motor vehicle (Transport)", "MGV-Medium goods vehicle", "HMV-Heavy motor vehicle", "HPMV-Heavy Passenger Motor Vehicle", "HTV-Heavy Trasnport Vehicle"]
  $scope.next = function(){
    var data={
      user: $cookieStore.get('user'),
      rto:$scope.rto_name,
      fname: $scope.fname,
      lname: $scope.lname,
      gender: $scope.gender,
      aadhar: $scope.aadhar,
      mobile: $scope.mobile,
      perm_addr: $scope.perm_address,
      perm_city: $scope.perm_city,
      perm_pin: $scope.perm_pin,
      temp_addr: $scope.temp_address,
      temp_city: $scope.temp_city,
      temp_pin: $scope.temp_pin,
      type: $scope.type.split('-')[0]
    }
    $scope.copy_addr = function(){
    if($scope.copy){
      $scope.temp_addr = $scope.perm_addr;
      $scope.temp_city = $scope.perm_city;
      $scope.temp_pin = $scope.perm_pin;
      $scope.temp_addr = "google"
    }
  }
    formData.putdata(data);
  if(data.rto==null || data.fname==null || data.lname==null|| data.perm_addr==null || data.perm_city===null || data.perm_pin===null || data.mobile===null || data.type===null)
  $scope.err = "One or more required fields missing!";
  else{
    $scope.err="";
  $http({
    url: '/learnersLicenceForm1',
    method: 'post',
    data:{'data': data}
  }).then(function(data){
    if(data.data){
      $location.path('/learnersLicenceForm1').replace();
      $scope.err = "See Cosole";
    }
    else {
      {
        $scope.err = "Already applied for this type before!"
      }
    }
  })
}}
});
