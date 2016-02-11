angular.module('App')

.controller('viewTicketController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject,$firebaseArray, Auth, FURL, Utils) {
console.log('controller working')

  // Get a database reference to our posts
var ref = new Firebase("https://authapp1.firebaseio.com/message_list");
// Attach an asynchronous callback to read the data at our posts reference
 ref.on("value", function(snapshot) {
   console.log(snapshot.val());
  
   var messages = snapshot.val()
   $scope.messages = messages

   

   console.log($scope.messages)
   // var query = ref.orderByChild("timestamp").limitToLast(25);
  

   
   
 }, function (errorObject) {
   console.log("The read failed: " + errorObject.code);
 });

 

   
  })