angular.module( 'App' )
  .controller( 'viewTicketController', function ( $scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject,$firebaseArray, Auth, FURL, Utils ) {
    console.log( 'controller working' )
    var vm = this

    //sorting
    vm.sortType = ''
    vm.sortReverse = false 
    vm.searchMessage = ''

    if (localStorage.project_code === "admin") {
      var ref = new Firebase("https://authapp1.firebaseio.com/message_list/")

      var hello = $firebaseArray(ref)
      vm.messages = hello
      vm.admin = true


    }
    else {
    var ref = new Firebase("https://authapp1.firebaseio.com/message_list/")

    var ref1 = ref.orderByChild("project_code")
      .equalTo(window.localStorage.project_code)
     
    var hello = $firebaseArray(ref1)
      console.log(hello)
      // console.log(hello.length)
      // for (var i=0; i<hello.length; i++) {
      //   console.log(i)
      // }

    vm.messages = hello  

    
    }  
    

  })

  