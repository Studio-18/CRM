angular.module('App')

.controller('ticketController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
console.log('controller working')

  vm = this
  console.log('working')

  

  $scope.newTicket = function() {
    
    var ticket = {}
    ticket.firstname  = this.ticket.firstname
    ticket.lastname   = this.ticket.lastname
    ticket.message    = this.ticket.message
    ticket.created_at = Date.now()
    ticket.id         = window.localStorage.id

  
    var ref = new Firebase('https://authapp1.firebaseio.com/message_list');
    var newTicketRef = ref.push()
    newTicketRef.set({'ticket': ticket})

//     ref.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });


    
    console.log(ticket)

  }

})