angular.module('App').controller('editTicketController', function ($scope, $state, $stateParams,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  // console.log('editTicketController working ')
   console.log('passed params :', $stateParams)

   var hello = $stateParams.ticket_id
   console.log(hello)
var hel = "https://authapp1.firebaseio.com/message_list/"
   var hello1 = hel.concat(hello)
   console.log(hello1)
  var ref = new Firebase(hello1 ).on("value", function(snapshot) {
  console.log(snapshot.val());  // Alerts "San Francisco"
  $scope.message = snapshot.val()
  console.log($scope.message)
});


  $scope.update = function(){
    console.log(hello1)

    var ticket = {}
    ticket.devMessage  = this.ticket.devMessage
    ticket.status      = this.ticket.status
    console.log(ticket.devMessage)

    var ref = new Firebase(hello1)
      

      ref.update({
        'devMessage' : ticket.devMessage
        
      })



    this.ticket.devMessage= ''


  }


    

   // var test = snapshot.val()
    

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