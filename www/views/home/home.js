'Use Strict';
angular.module('App').controller('homeController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  var ref = new Firebase('https://authapp1.firebaseio.com/profile');

    
      ref.orderByChild('id').equalTo(window.localStorage.id).on('value', function(snapshot){
        console.log(snapshot.val())
      })
      
  

  $scope.logOut = function () {
      Auth.logout();
      $location.path("/login");
  }

}
);
