'Use Strict';
angular.module( 'App' )
  .controller( 'homeController', function ( $scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils ) {
    var vm = this
    var ref = new Firebase( 'https://authapp1.firebaseio.com/profile' )

    ref.orderByChild( 'id' ).equalTo( window.localStorage.id ).on( 'value', function( snapshot ) {
      console.table( snapshot.val() )
    })
      
    vm.logOut = function ( ) {
      Auth.logout( );
      window.localStorage.clear( )
      $location.path( "/login" )
    }
  })
