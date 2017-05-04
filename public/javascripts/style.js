$(document).ready(function() {
    var canvas = $(".navclick");
    // var b = false;
    canvas.click(function () {

      if(document.getElementById("intro").style.left=="300px") {
        $(".navlist").hide();
        document.getElementById("intro").style.left="0";
        document.getElementById("detail").style.left="0";
        document.getElementById("nav").style.left="0";
        document.getElementById("joinfooter").style.left="400px";
      } else {
        $(".navlist").fadeIn(1000, "linear");
        document.getElementById("intro").style.left="300px";
        document.getElementById("detail").style.left="300px";
        document.getElementById("nav").style.left="300px";
        document.getElementById("joinfooter").style.left="700px";
      }
    });

});
