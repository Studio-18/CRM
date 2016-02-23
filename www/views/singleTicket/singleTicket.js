angular.module( 'App' )
  .controller( 'singleTicketController', function ( $scope, $stateParams, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject,$firebaseArray, Auth, FURL, Utils ) {
    console.log( 'controller working' )

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
    // console.log(vm.message.images)
    // var hello = vm.message.images
    // console.log(hello)
    })

    var ref1 = "https://authapp1.firebaseio.com/message_list/"
    var refImage = ref1.concat( tickId )
    var refImage1 = (refImage + '/images/')
    console.log(refImage1)

    var ref3 = new Firebase( refImage1 )
    var images = $firebaseArray(ref3)
      console.log(images)
      $scope.images = images

    //update the comments
    vm.update = function(){
      console.log(refPath)

      var ticket = {}
      ticket.devMessage  = this.ticket.devMessage
      ticket.status      = this.ticket.status
      console.log(ticket.devMessage)

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