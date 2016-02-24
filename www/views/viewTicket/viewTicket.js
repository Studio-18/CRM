angular.module( 'App' )
  .controller( 'viewTicketController', function ( $scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject,$firebaseArray, Auth, FURL, Utils ) {
    console.log( 'controller working' )
    var vm = this

    //sorting
    vm.sortType = ''
    vm.sortReverse = false 
    vm.searchMessage = ''

    var ref = new Firebase("https://authapp1.firebaseio.com/message_list/")

    var ref1 = ref.orderByChild("project_code")
      .equalTo(window.localStorage.project_code)
     
    var hello = $firebaseArray(ref1)
      console.log(hello)

    vm.messages = hello    
    
  })

  