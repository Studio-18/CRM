angular.module('App')
.controller('uploadController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils, Upload) {

        $scope.editFiles = function() {
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            var img = document.getElementById("testImage");
            ctx.strokeStyle = "#222222";
            ctx.lineWith = 2;
            ctx.drawImage(img, 10, 10);

            
           canvas.addEventListener('click', function(e){
            console.log('hello')
   var mouseX = e.pageX - this.offsetLeft;
   var mouseY = e.pageY - this.offsetTop;
  
   paint = true;
   addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
   console.log(this.offsetTop)
   redraw();
})

  canvas.addEventListener('mousemove', function(e){
    if(paint){
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
      redraw();
    }
  });

 canvas.addEventListener('mouseup', function(e){
   paint = false;
 });

 canvas.addEventListener('mouseleave', function(e){
   paint = false;
 });

 var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}

function redraw(){
  // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas
  
  ctx.strokeStyle = "#df4b26";
  ctx.lineJoin = "round";
  ctx.lineWidth = 5;
      
  for(var i=0; i < clickX.length; i++) {    
    ctx.beginPath();
    if(clickDrag[i] && i){
      ctx.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       ctx.moveTo(clickX[i]-1, clickY[i]);
     }
     ctx.lineTo(clickX[i], clickY[i]);
     ctx.closePath();
     ctx.stroke();
  }
}

        }

        $scope.uploadFiles = function(picFiles){
          
      
      
        
          picFiles.upload = Upload.upload({
            url: "https://api.cloudinary.com/v1_1/" + "**********" + "/upload",
            data: {
              upload_preset: "********",
              tags: 'myphotoalbum',
              context: 'photo=' + $scope.title,
              file: picFiles
            }
          })
          .success(function (data) {
              console.log('working')
              console.log(data)
              console.log(data.url)
              var ticket = {}
              ticket.image = data.url
              console.log(ticket.image)


              var root = new Firebase('https://authapp1.firebaseio.com/message_list');

              root.update({
        'images' : ticket.image
        

      }).then(function(response ){
        // call function to refresh page
      } )
              
  


            
            
          }).error(function (data, status, headers, config) {
            file.result = data;
          });


    }
})