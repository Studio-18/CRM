angular.module('App')
.controller('uploadController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils, Upload) {

        $scope.uploadFiles = function(picFiles){
          
      
      
        
          picFiles.upload = Upload.upload({
            url: "https://api.cloudinary.com/v1_1/" + "dsduoklii" + "/upload",
            data: {
              upload_preset: "cum5djmt",
              tags: 'myphotoalbum',
              context: 'photo=' + $scope.title,
              file: picFiles
            }
          })
          .success(function (data) {
              console.log('working')
              console.log(data)
              console.log(data.url)
              var ticket = {}
              ticket.image = data.url
              console.log(ticket.image)


              var root = new Firebase('https://authapp1.firebaseio.com/message_list');

              root.update({
        'images' : ticket.image
        

      })
              
  


            
            
          }).error(function (data, status, headers, config) {
            file.result = data;
          });


    }
})