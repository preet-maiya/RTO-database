var app = angular.module('app')

app.controller('registerVehicleController', function($scope,$http,$location,$cookieStore, formData){
  $scope.err=""
  $scope.list = ["KA01 - Koramangala, Bangalore","KA02 - Rajajinagar, Bangalore","KA03 - Indiranagar, Bangalore","KA04 - Yeshwanthpur, Bangalore","KA05 - Jayanagar, Bangalore","KA06 - Tumkur","KA07 - Kolar","KA08 - Kolar Gold Fields","KA09 - Mysore","KA10 - Chamrajnagar","KA11 - Mandya","KA12 - Madikeri","KA13 - Hassan","KA14 - Shimoga","KA15 - Sagar","KA16 - Chitradurga","KA17 - Davangere","KA18 - Chickmagalur","KA19 - Mangalore","KA20 - Udupi","KA21 - Puttur","KA22 - Belgaum","KA23 - Chikkodi","KA24 - Bailhongal","KA25 - Dharwad","KA26 - Gadag","KA27 - Haveri","KA28 - Vijapura","KA29 - Bagalkot","KA30 - Karwar","KA31 - Sirsi","KA32 - Kalaburagi","KA33 - Yadgir","KA34 - Bellary","KA35 - Hospet","KA36 - Raichur","KA37 - Koppal","KA38 - Bidar","KA39 - Bhalki","KA40 - Chikkaballapur","KA41 - Kengeri","KA42 - Ramanagar, Bangalore","KA43 - Devanahalli, Bangalore","KA44 - Tiptur, Tumkur district","KA45 - Hunsur, Mysore District","KA46 - Sakleshpur, Hassan District","KA47 - Honnavar, Uttarakannada District","KA48 - Jamkhandi, Bagalkote District","KA49 - Gokak, Belguam District","KA50 - Yelhanka, Bangalore","KA51 - Banneraghatta, Bangalore","KA52 - Nelamangala, Bangalore District","KA53 - K.R.Puram, Bangalore","KA54 - Nagamangala, Mandya District","KA55 - Mysore","KA56 - Basavakalyan","KA57 - Shantinagar, Bangalore","KA58 - Banashankari","KA59 - Chamrajpet, Bengaluru Dist - 560019","KA60 - R.T. Nagar, Bengaluru District","KA61 - Marathahalli","KA62 - Surathkal, Mangaluru","KA63 - Hubballi - 580026","KA64 - Madhugiri, Tumakuru District - 572132","KA65 - Dandeli - 581325","KA66 - Tarikere, Chikkamagaluru District"]
  $scope.ownership = ["CENTRAL GOVERNMENT","CHARITABLE TRUST", "CORPORATION", "DRIVING SCHOOL", "EDUCATIONAL INSTITUTE", "FIRM", "INDIVIDUAL", "KSRTC", "OTHERS"]
  $scope.v_type = ["TRANSPORT", "NON-TRANSPORT"]
  $scope.next = function(){
    data = {
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
      chassis_no: $scope.chassis_no,
      engine_no: $scope.engine_no,
      ownership: $scope.owner,
      type: $scope.type
    }
    if(data.rto==null || data.fname==null || data.lname==null|| data.perm_addr==null || data.perm_city===null || data.perm_pin===null || data.mobile===null || data.type===null)
    $scope.err = "One or more required fields missing!";
    else{
      $scope.err="";
    $http({
      url: '/vehicleRegister',
      method: 'post',
      data:{'data': data}
    }).then(function(data){
      if(data.data.success){
        $location.path('/LandingPage').replace();
        $scope.err = "See Cosole";
      }
    })
  }
}
});
