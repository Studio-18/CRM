'Use Strict';
var stuffs = []
angular.module( 'App' )
  .controller( 'profileController', function ( $scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils ) {
    var vm = this
    console.log( 'profile controller working' )
    var ref = new Firebase( 'https://authapp1.firebaseio.com/profile' )

    ref.orderByChild( 'id' ).equalTo( window.localStorage.id ).on( 'child_added', function( snapshot ){
      vm.email = snapshot.val( ).email
      vm.gravatar = snapshot.val( ).gravatar

      console.log( snapshot.val( ) )
      console.log( snapshot.key( ) ) 
      console.log( $scope.profile )
       
    })

    var projectData = new Firebase( 'https://authapp1.firebaseio.com/message_list' )
      projectData.orderByChild( 'project_code' ).equalTo( '111' ).on( 'value', function( snapshot ){
        console.log( snapshot.val( ) )
    })


    ////////////////////////////////////////
    var ref = new Firebase("https://authapp1.firebaseio.com/message_list/")

    var ref1 = ref.orderByChild("project_code")
      .equalTo(window.localStorage.project_code)

    var statusArray = []

    ref1.once("value", function(snapshot) {
  
  snapshot.forEach(function(childSnapshot) {
    
    var key = childSnapshot.key();
    
    var childData = childSnapshot.val();
    console.log(childData.status)
    statusArray.push(childData.status)
     // console.log(statusArray)
  })
  console.log(statusArray)
  //loop over statusArray
  var newTask=0
  var completedTask=0
  var inQueue=0
  var inProcess=0

  for (var i=0;i<statusArray.length;i++){
    if (statusArray[i] ==="new") {
      newTask++
    } else if (statusArray[i] ==="Completed")
      {
        completedTask++
    } else if (statusArray[i] ==="In Queue")
      {
        inQueue++

    } else if (statusArray[i] ==="In Process")
      {
        inProcess++
    }
      
  }
  console.log(newTask)
  console.log(completedTask)
  console.log(inQueue)
  console.log(inProcess)
  var data = [
    {
        value: newTask,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "New Tasks",
        labelColor : 'white',
                labelFontSize : '16'
    },
    {
        value: inProcess,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "In Process"
    },
    {
        value: inQueue,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "In Queue"
    },
    {
        value: completedTask,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Completed"
    }
]

var options = {
    segmentShowStroke: false,
    animateRotate: false,
    animateScale: false,
    percentageInnerCutout: 50,
    tooltipTemplate: "<%= label %>"

}

var ctx = document.getElementById("myChart").getContext("2d");

var myDoughnutChart = new Chart(ctx).Doughnut(data,options);


})
    




  })