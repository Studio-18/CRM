angular.module('App')
.controller('imageViewController', function ($scope, $firebaseArray, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils, Upload) {
    
    var ref = new Firebase("https://authapp1.firebaseio.com/message_list/images");

      
     

     var images = $firebaseArray(ref)
      console.log(images)
      $scope.images = images


    })