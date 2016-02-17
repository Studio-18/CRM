angular.module('App')
.controller('uploadController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FURL, Utils, Upload) {
        var x = "black"

        $scope.color =  function(obj) {
          console.log('working')
          
    switch (obj) {
        case "green":
            x = "green";
            console.log(x)
            break;
        case "blue":
            x = "blue";
            break;
        case "red":
            x = "red";
            break;
        case "yellow":
            x = "yellow";
            break;
        case "orange":
            x = "orange";
            break;
        case "black":
            x = "black";
            break;
        case "white":
            x = "white";
            break;
    }
    if (x == "white") y = 14;
    else y = 2;

}

        $scope.editFiles = function() {
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            var img = document.getElementById("testImage");
            ctx.strokeStyle = "#222222";
            ctx.lineWith = 2;
            ctx.drawImage(img, 10, 10);

            var flag = false
            var prevX = 0
            var currX = 0
            var prevY = 0
            var currY = 0
            var dot_flag = false
            // var x = "black"
            var y = 2

            w = canvas.width;
            h = canvas.height;

            canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);

//     $scope.color =  function(obj) {
//     switch (obj.id) {
//         case "green":
//             x = "green";
//             break;
//         case "blue":
//             x = "blue";
//             break;
//         case "red":
//             x = "red";
//             break;
//         case "yellow":
//             x = "yellow";
//             break;
//         case "orange":
//             x = "orange";
//             break;
//         case "black":
//             x = "black";
//             break;
//         case "white":
//             x = "white";
//             break;
//     }
//     if (x == "white") y = 14;
//     else y = 2;

// }


$scope.draw = function() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

$scope.erase = function() {
    // var m = confirm("Want to clear");
    // if (m) {
        ctx.clearRect(0, 0, w, h);

        var img = document.getElementById("testImage");
            
            ctx.drawImage(img, 10, 10);
        // document.getElementById("canvasimg").style.display = "none";
    // }
}

$scope.save = function() {
    document.getElementById("canvasimg").style.border = "2px solid";
    var dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
    $scope.uploadFiles(dataURL)
}

function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            $scope.draw();
        }
    }
}




        }

        $scope.uploadFiles = function(picFiles){
          
      
      
        
          picFiles.upload = Upload.upload({
            url: "https://api.cloudinary.com/v1_1/" + "dsduoklii" + "/upload",
            data: {
              upload_preset: "cum5djmt",
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
        

      })

      //         .then(function(response ){
      //   // call function to refresh page
      // } )
              
  


            
            
          }).error(function (data, status, headers, config) {
            file.result = data;
          });


    }
})