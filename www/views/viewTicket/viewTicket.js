angular.module('App')

.controller('viewTicketController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject,$firebaseArray, Auth, FURL, Utils) {
console.log('controller working')

//----------sorting
$scope.sortType = ''
$scope.sortReverse = false 
$scope.searchMessage = ''


//-------
 var vm = this
  // Get a database reference to our posts
// var ref = new Firebase("https://authapp1.firebaseio.com/message_list");
// // Attach an asynchronous callback to read the data at our posts reference
//  ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
  
//    var messages = snapshot.val()
//    $scope.messages = messages
    
   

//    console.log($scope.messages)
//    // var query = ref.orderByChild("timestamp").limitToLast(25);
  

   
   
//  }, function (errorObject) {
//    console.log("The read failed: " + errorObject.code);
//  });
//------------------------------------------------
  // var hi
  // var ref = new Firebase("https://authapp1.firebaseio.com/message_list/");

  //   var poop = ref.orderByChild("project_code")
  //   .equalTo(window.localStorage.project_code)
  //   .on('value', function(response){
  //       hi = response
  //       // $scope.messages = response.val()
  //       console.log(response.val())
  //     } )
  //   var ar = $firebaseArray(ref)
  //   console.log(ar)
  //   $scope.messages = ar
  //   // vm.touching = function(){
  //   //   // var test = 
  //   //   console.log()
  //   // }

    //------------------------------------------------

    var ref = new Firebase("https://authapp1.firebaseio.com/message_list/");

      var poop = ref.orderByChild("project_code")
     .equalTo(window.localStorage.project_code)
     

     var hello = $firebaseArray(poop)
      console.log(hello)


      $scope.messages = hello



   
       
  })

  