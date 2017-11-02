var app = angular.module('app')

app.controller('learnerLicenseForm1', function($scope,$http,Upload,$window,$cookieStore,$location){
  age = false;
  id = false;
  $scope.submit1 = function(){
      id = true;//function to call on form submit
      if ($scope.file1.$valid || $scope.file1) { //check if from is valid
        console.log("no error")
          $scope.upload($scope.file1, "ID_Proof"); //call upload function
        }
      else {
        console.log("error")
      }
  }
  $scope.submit2 = function(){
      age = true;//function to call on form submit
      if ($scope.file2.$valid || $scope.file2) { //check if from is valid
        console.log("no error")
          $scope.upload($scope.file2, "Age_Proof"); //call upload function
        }
      else {
        console.log("error")
      }
  }

  $scope.upload = function (file, type) {
      //var type = document.getElementsByClassName("id_proof");
      //console.log($('.id_proof').text())
      Upload.upload({
          url: 'http://localhost:8080/upload', //webAPI exposed to upload the file
          data:{file:file},
          name: Upload.rename(file, $cookieStore.get('user')+"~"+type+"~"+file.name.split('.')[1]) //pass file as data, should be user ng-model
      }).then(function (resp) { //upload function returns a promise
          if(resp.data.error_code === 0){ //validate success
              $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
          } else {
            console.log(resp.data);
              $window.alert('an error occured');
          }
      }, function (resp) { //catch error
          console.log('Error status: ' + resp.status);
          $window.alert('Error status: ' + resp.status);
      }, function (evt) {
          console.log(evt);
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
          $scope.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
      });
  };

  $scope.done = function(){
    if(age && id)
      $location.path('/LandingPage').replace();
  }
});
