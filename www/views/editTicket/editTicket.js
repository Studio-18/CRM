angular.module( 'App' )
  .controller( 'editTicketController', function ( $scope, $state, $stateParams,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils ) {
    console.log( 'editTicketController working' )
    console.log( 'passed params :', $stateParams )

    var vm = this

    //get firebase reference to the ticket 
    var tickId = $stateParams.ticket_id
    console.log( tickId )
    var ref1 = "https://authapp1.firebaseio.com/message_list/"
    var refPath = ref1.concat( tickId )
    console.log( refPath )
  
    var ref2 = new Firebase( refPath ).on("value", function( snapshot ) {
    console.log(snapshot.val())
    vm.message = snapshot.val()
    console.log(vm.message)
    })

    //update the comments
    vm.update = function(){
      console.log(refPath)

      var ticket = {}
      ticket.devMessage  = this.ticket.devMessage
      ticket.status      = this.ticket.status
      console.log(ticket.devMessage)

      console.log(ticket.status)

      if (ticket.status === "Completed") {
        var ref = new Firebase(refPath)
          ref.update({
        'devMessage' : ticket.devMessage,
        'status' : ticket.status,
        'completed' : true
        })
      } else {
        var ref = new Firebase(refPath)
          ref.update({
        'devMessage' : ticket.devMessage,
        'status' : ticket.status
        
      })
      }
      var ref = new Firebase(refPath)
      ref.update({
        'devMessage' : ticket.devMessage,
        'status' : ticket.status
      })

      //clear form and redirect 
      this.ticket.devMessage= ''
      $location.path('/viewTicket');
    }
  })