var coordinateTracker = [0,0];

$(document).on('pageinit', function(event){
   $("main").swiperight(function() {
     console.log("You swiped to go right!")
     var current = checkCenter(coordinateTracker);
     $("#canvas").find(current).hide();
     coordinateTracker[0] += 1;
     var replacement = checkCenter(coordinateTracker);
     $("#canvas").find(replacement).show();
     return coordinateTracker
    });
});

$( document ).ready(function() {

    // Setting up website methods:

    var centerCanvas = $(this).find("#canvas");

    function checkCenter(coordinateTracker) {

      var centerWindow = "";
      if (coordinateTracker[0]===0 && coordinateTracker[1]===0) {
        centerWindow = "#center-box"
      } else if (coordinateTracker[0]>= 0 && coordinateTracker[1]===0) {
        centerWindow = "#right-box"
      } else if (coordinateTracker[0]<= 0 && coordinateTracker[1]===0) {
      centerWindow = "#left-box"
      } else if (coordinateTracker[0]=== 0 && coordinateTracker[1]>=0) {
        centerWindow = "#upper-box"
      } else if (coordinateTracker[0]=== 0 && coordinateTracker[1]<=0) {
        centerWindow = "#lower-box"
      }
      console.log("you changed to... " + centerWindow)
      return centerWindow

    }

    function checkArrows(coordinateTracker) {

      if (checkCenter(coordinateTracker) === "#center-box") {
        console.log("You are at center box.")
        $(".fa").show()
      } else if (checkCenter(coordinateTracker) === "#left-box") {
        console.log("You are in left box.")
        $(".fa").hide()
        $(".fa.fa-chevron-right").show()
      } else if (checkCenter(coordinateTracker) === "#right-box") {
        console.log("You are in right box.")
        $(".fa").hide()
        $(".fa.fa-chevron-left").show()
      } else if (checkCenter(coordinateTracker) === "#lower-box") {
        console.log("You are in lower box.")
        $(".fa").hide()
        $(".fa.fa-chevron-up").show()
      } else if (checkCenter(coordinateTracker) === "#upper-box") {
        console.log("You are in upper box.")
        $(".fa").hide()
        $(".fa.fa-chevron-down").show()
      }
    }


    // Use this area to make mobile functionality:

    // $("main").on("swipeleft", function() {
    //   console.log("You swiped to go right!")
    //   var current = checkCenter(coordinateTracker);
    //   $("#canvas").find(current).hide();
    //   coordinateTracker[0] += 1;
    //   var replacement = checkCenter(coordinateTracker);
    //   $("#canvas").find(replacement).show();
    //   return coordinateTracker
    // });

    // More to come...

    // Use this area to make desktop functionality:

      // // Making arrows clickeable (to BE REFACTORED):


      $(".fa.fa-chevron-left").on("click", function(){

        var current = checkCenter(coordinateTracker);
        $("#canvas").find(current).hide();
        coordinateTracker[0] -= 1; // Changing the x-coordinate.
                  checkArrows(coordinateTracker);
        var replacement = checkCenter(coordinateTracker);
        $("#canvas").find(replacement).fadeIn();
        return coordinateTracker

      })

      $(".fa.fa-chevron-up").on("click", function() {

            var current = checkCenter(coordinateTracker);
            $("#canvas").find(current).hide();
            coordinateTracker[1] += 1; // Changing the y-coordinate.
                      checkArrows(coordinateTracker);
            var replacement = checkCenter(coordinateTracker);
            $("#canvas").find(replacement).fadeIn();
            return coordinateTracker

          })

      $(".fa.fa-chevron-right").on("click", function() {

        var current = checkCenter(coordinateTracker);
        $("#canvas").find(current).hide();
        coordinateTracker[0] += 1;
                  checkArrows(coordinateTracker);
        var replacement = checkCenter(coordinateTracker);
        $("#canvas").find(replacement).fadeIn();
        return coordinateTracker

      })

      $(".fa.fa-chevron-down").on("click", function() {

        var current = checkCenter(coordinateTracker);
        $("#canvas").find(current).hide();
        coordinateTracker[1] -= 1;
                  checkArrows(coordinateTracker);
        var replacement = checkCenter(coordinateTracker);
        $("#canvas").find(replacement).fadeIn();
        return coordinateTracker

      })


      // Alternative way to get to contacts page:

      $("#link-contact").on("click", function() {

        var current = checkCenter(coordinateTracker);
        window.scrollTo(0, 0);
        $("#canvas").find(current).hide();
        coordinateTracker[0] += 2;
                  checkArrows(coordinateTracker);
        var replacement = checkCenter(coordinateTracker);
        $("#canvas").find(replacement).fadeIn();
        return coordinateTracker

      })


      // // Making the directional keys operational:

    $(document).keydown(function(e) {

      e.preventDefault();

      switch(e.which) {

          case 37: // left
          console.log("You clicked to go left!")
          var current = checkCenter(coordinateTracker);
          $("#canvas").find(current).hide();
          coordinateTracker[0] -= 1; // Changing the x-coordinate.
                    checkArrows(coordinateTracker);
          var replacement = checkCenter(coordinateTracker);
          $("#canvas").find(replacement).fadeIn();
          return coordinateTracker
          break;

          case 38: // up
          console.log("You clicked to go up!")
          var current = checkCenter(coordinateTracker);
          $("#canvas").find(current).hide();
          coordinateTracker[1] += 1; // Changing the y-coordinate.
                    checkArrows(coordinateTracker);
          var replacement = checkCenter(coordinateTracker);
          $("#canvas").find(replacement).fadeIn();
          return coordinateTracker
          break;

          case 39: // right
          console.log("You clicked to go right!")
          var current = checkCenter(coordinateTracker);
          $("#canvas").find(current).hide();
          coordinateTracker[0] += 1;
                    checkArrows(coordinateTracker);
          var replacement = checkCenter(coordinateTracker);
          $("#canvas").find(replacement).fadeIn();
          return coordinateTracker
          break;

          case 40: // down
          console.log("You clicked to go down!")
          var current = checkCenter(coordinateTracker);
          $("#canvas").find(current).hide();
          coordinateTracker[1] -= 1;
                    checkArrows(coordinateTracker);
          var replacement = checkCenter(coordinateTracker);
          $("#canvas").find(replacement).fadeIn();
          return coordinateTracker
          break;

          default: return coordinateTracker; // exit this handler for other keys


      }


    });


});
