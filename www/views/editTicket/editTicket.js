angular.module('App').controller('editTicketController', function ($scope, $state, $stateParams,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  // console.log('editTicketController working ')
  // console.log($stateParams)

  var ref = new Firebase("https://authapp1.firebaseio.com/message_list")
   // var test = snapshot.val()
    var newChildRef = ref.push()

        console.log(newChildRef.key())
        
  // var ref = new Firebase("https://authapp1.firebaseio.com/message_list");

  //   ref

  //     .orderByChild("project_code").equalTo(window.localStorage.project_code)


  //   .on('value', function(snapshot){
        
  //       // console.log(snapshot.key(), "this the response from ref of projec code")
  //       // $scope.messages = snapshot.val()

  //       // var newRef =snapshot.val()
  //       // console.log(newRef)

  //       // console.log()

  //       snapshot.forEach(function(childSnapshot){
  //         var key = childSnapshot.key()
  //         var childData = childSnapshot.val()
  //         console.log(childData)
  //         return true
  //       })

      // })


})