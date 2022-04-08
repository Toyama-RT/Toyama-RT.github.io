console.log("Hello WhiteDog!");
let countup = 0;
// Main
window.onload = function(){
    // Mouse
    var isMouseDown;
          document.addEventListener("mouseup", handleMouseUp, true);
          document.addEventListener("mousedown", handleMouseDown, true);
 
    function handleMouseDown(e){
        isMouseDown = true;
        handleMouseMove(e);
        document.addEventListener("mousemove", handleMouseMove, true);
        document.addEventListener("touchmove", handleMouseMove, true);
      console.log("MouseDown");
      var elemdog = document.getElementById("image_dog");
          elemdog.src = "./dog2.gif";
      audioElem = new Audio();
      audioElem.src = "./doga.mp3";
      audioElem.play();
    }
 
    function handleMouseUp(){
        document.removeEventListener("mousemove", handleMouseMove, true);
        document.removeEventListener("touchmove", handleMouseMove, true);
      console.log("MouseUp");
      var elemdog = document.getElementById("image_dog");
          elemdog.src = "./dog1.gif";
          countup++;
          console.log(countup);
        if(countup > 10){
              countup =0;
                      var elemdog = document.getElementById("image_dog");
                          elemdog.src = "./dog3.gif";
                       setTimeout(function(){
                       console.log("舌をだしました")
                       elemdog.src = "./dog1.gif";
                       },1000);
        }
        isMouseDown = false;
    }
 
    function handleMouseMove(e){
        var clientX, clientY;
        if(e.clientX){
            clientX = e.clientX; clientY = e.clientY;
        }else if(e.changedTouches && e.changedTouches.length > 0){
            var touch = e.changedTouches[e.changedTouches.length - 1];
            clientX = touch.clientX; clientY = touch.clientY;
        }else{
           return;
        }
    };
};