angular.module('App')

.controller('ticketController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
console.log('controller working')

  vm = this
  console.log('working')


  

  $scope.newTicket = function() {
    
    var ticket = {}
    ticket.feature  = this.ticket.feature
    ticket.project_code   = this.ticket.project_code
    ticket.message    = this.ticket.message
    ticket.created_at = Date.now()
    ticket.user       = window.localStorage.id 
    ticket.status     = "new"
    ticket.priority   = this.ticket.priority
    ticket.created_by = window.localStorage.user
    


     var who = new Firebase('https://authapp1.firebaseio.com/profile');
     var who2 = who.orderByChild('id').equalTo(window.localStorage.id).on('child_added', function(snapshot){
     whats = (snapshot.key())
     console.log(whats)

   })

  
    var root = new Firebase('https://authapp1.firebaseio.com');
    var id = root.child('/message_list').push()
    // var newTicketRef = ref.push()
    id.set(ticket, function(err){
      if(!err) {
        var name =id.key()
        console.log(name)
        root.child("/profile/" + whats + "/projects/").push(name)
      }
    })

    $location.path('/viewTicket');



//     ref.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });


    
    console.log(ticket)

  }

})