angular.module( 'App' )
  .controller( 'uploadController', function ( $scope, $timeout, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils, Upload ) {
    var vm = this
    var x = "black"

    //this function will upload an image, allow it to be edited and then uploaded
    //to both firebase and cloudinary

    vm.editFiles = function( ) {

      //initial declaration of variables

      var vm = this
      var canvas = document.getElementById( "myCanvas" )
      var ctx = canvas.getContext( "2d" )
      var img = document.getElementById( "testImage" )
      ctx.strokeStyle = "#222222"
      ctx.lineWith = 2
      ctx.drawImage( img, 10, 10 )
      $scope.showCanvas = true

      var flag = false
      var prevX = 0
      var currX = 0
      var prevY = 0
      var currY = 0
      var dot_flag = false
      // var x = "black"
      var y = 2

      w = canvas.width
      h = canvas.height


      //event listeners for canvas drawing

      canvas.addEventListener( "mousemove", function ( e ) {
      findxy( 'move', e )
      }, false )
      canvas.addEventListener( "mousedown" , function ( e ) {
        findxy( 'down', e )
      }, false )
        canvas.addEventListener( "mouseup", function ( e ) {
        findxy( 'up', e )
      }, false )
        canvas.addEventListener( "mouseout", function ( e ) {
        findxy( 'out', e )
      }, false )

      //function to change color of drawing pen

      vm.color =  function( obj ) {
        console.log( 'working' )
          
        switch ( obj ) {
          case "green":
            x = "green"
            console.log( x )
            break
          case "blue":
            x = "blue"
            break
          case "red":
            x = "red"
            break
          case "black":
            x = "black"
            break
          }
        }

      //function to draw on the canvas  
      vm.draw = function( ) {
        ctx.beginPath( );
        ctx.moveTo( prevX, prevY )
        ctx.lineTo( currX, currY )
        ctx.strokeStyle = x
        ctx.lineWidth = y
        ctx.stroke( )
        ctx.closePath( )
      }

      //function to erase drawing on canvas
      vm.erase = function( ) {
        ctx.clearRect( 0, 0, w, h )
        var img = document.getElementById( "testImage" )
        ctx.drawImage( img, 10, 10 )        
      }

      //function to save image
      vm.save = function( ) {
        // document.getElementById("canvasimg").style.border = "2px solid"
        var dataURL = canvas.toDataURL( )
        // document.getElementById("canvasimg").src = dataURL
        // document.getElementById("canvasimg").style.display = "inline"
        vm.uploadFiles( dataURL )
      }

      //internal drawing functions
      function findxy( res, e ) {
        if ( res == 'down' ) {
          prevX = currX
          prevY = currY
          currX = e.clientX - canvas.offsetLeft
          currY = e.clientY - canvas.offsetTop

          flag = true
          dot_flag = true
          if ( dot_flag ) {
            ctx.beginPath( )
            ctx.fillStyle = x
            ctx.fillRect(currX, currY, 2, 2)
            ctx.closePath()
            dot_flag = false
            }
          }
          if ( res == 'up' || res == "out" ) {
            flag = false
          }
          if ( res == 'move' ) {
            if ( flag ) {
              prevX = currX
              prevY = currY
              currX = e.clientX - canvas.offsetLeft
              currY = e.clientY - canvas.offsetTop
              vm.draw( )
            }
          }
        }
      }

      //function to upload files to cloudinary
      vm.uploadFiles = function( picFiles ){
        picFiles.upload = Upload.upload({
        url: "https://api.cloudinary.com/v1_1/" + "dsduoklii" + "/upload",
        data: {
        upload_preset: "cum5djmt",
        tags: 'myphotoalbum',
        context: 'photo=' + $scope.title,
        file: picFiles
          }
        })
        .success(function ( data ) {
          $scope.hello = false
          $scope.picFile = []
          console.log($scope.picFile)
          console.log( 'working' )
          console.log( data )
          console.log( data.url )
          var ticket = {}
          ticket.image = data.url
          console.log( ticket.image )
          

          //store reference in firebase on the ticket id
          var hel = "https://authapp1.firebaseio.com/message_list/"
          console.log( Auth.current )
              
          var root1 = hel.concat( Auth.current )
          console.log( root1 )
          var root = new Firebase( root1 )
          var id = root.child( '/images' ).push( )


          id.set( ticket )

          //if save is successful a popup will appear
        //   var myPopup = $ionicPopup.show({
        //     template: '<p>Thanks for the Feedback</p>',
        //     title: 'thanks for the input',
        //     subTitle: 'we will get back to you shortly',
        //     scope: $scope,
        // })

        //   myPopup.then( function( res ) {
        //   console.log( 'popped', res )
        // })

        // A confirm dialog
   
     var confirmPopup = $ionicPopup.confirm({
       title: 'Image Uploader',
       template: 'Do You want to upload another file?'
     });
     confirmPopup.then(function(res) {
       if(res) {
          var canvas = document.getElementById( "myCanvas" )
      var ctx = canvas.getContext( "2d" )
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          $scope.showCanvas = false
         vm.uploadAgain()
       } else {
         $location.path( '/viewTicket' )
       }
     })
  




        //function to make popup close after 1.5s
        $timeout( function( ) {
          myPopup.close( ) //close the popup after 3 seconds for some reason
          $location.path( '/viewTicket' )
        }, 1500)
 
        }).error( function ( data ) {
      })
    }

    vm.uploadAgain = function(){
      console.log('this works')
    }

})