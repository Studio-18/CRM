'Use Strict';
angular.module('App').controller('profileController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils) {
  console.log('profile controller working')
  var ref = new Firebase('https://authapp1.firebaseio.com/profile');

    
      ref.orderByChild('id').equalTo(window.localStorage.id).on('child_added', function(snapshot){
        $scope.email = snapshot.val().email
        $scope.gravatar = snapshot.val().gravatar

        console.log(snapshot.val())
        console.log(snapshot.key())
        
        console.log($scope.profile)
       
      })
      
  

  

}
);