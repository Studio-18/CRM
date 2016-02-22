'Use Strict';
angular.module('App', ['ionic','ngStorage', 'ngCordova','firebase','ngMessages', 'ngFileUpload' ])
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'views/login/login.html',
      controller:'loginController'
    })
    .state('forgot', {
      url: '/forgot',
      templateUrl: 'views/forgot/forgot.html',
      controller:'forgotController'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register/register.html',
      controller:'registerController'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'views/home/home.html',
      controller:'homeController as homeController'
      
    })
    .state('upload', {
      url: '/upload',
      templateUrl: 'views/uploadImage/upload.html',
      controller:'uploadController as uploadController'
      
    })

    .state('view', {
      url: '/view',
      templateUrl: 'views/viewImage/viewImage.html',
      controller:'imageViewController'
      
    })


    .state('ticket', {
      url: '/ticket',
      templateUrl: 'views/newTicket/ticket.html',
      controller: 'ticketController as ticketController'

    })

    .state('viewTicket', {
      url: '/viewTicket',
      templateUrl: 'views/viewTicket/viewTicket.html',
      controller: 'viewTicketController as viewTicketController'
    })

    .state('profile', {
      url: '/profile',
      templateUrl: 'views/profile/profile.html',
      controller: 'profileController as profileController'
    })

    .state('editTicket', {
      url: '/edit/:ticket_id',
      templateUrl: 'views/editTicket/editTicket.html',
      controller: 'editTicketController as editTicketController'
    })

$urlRouterProvider.otherwise("/login");
})
// Changue this for your Firebase App URL.
.constant('FURL', 'https://authapp1.firebaseio.com')
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })

});
