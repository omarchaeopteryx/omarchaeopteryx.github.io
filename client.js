    var coordinateTracker = [0,0];
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


    // Use this area to make mobile functionality:

    $("#canvas").on("swipeleft", function() {
      console.log("You swiped to go right!")
      var current = checkCenter(coordinateTracker);
      $("#canvas").find(current).hide();
      coordinateTracker[0] += 1;
      var replacement = checkCenter(coordinateTracker);
      $("#canvas").find(replacement).show();
      return coordinateTracker
    });

    // More to come...

    // Use this area to make desktop functionality:

    $(document).keydown(function(e) {

      // e.preventDefault(); // prevent the default action (scroll / move caret)

      switch(e.which) {

          case 37: // left
          console.log("You clicked to go left!")
          var current = checkCenter(coordinateTracker);
          $("#canvas").find(current).hide();
          coordinateTracker[0] -= 1; // Changing the x-coordinate.
          var replacement = checkCenter(coordinateTracker);
          $("#canvas").find(replacement).show();
          return coordinateTracker
          break;

          case 38: // up
          console.log("You clicked to go up!")
          var current = checkCenter(coordinateTracker);
          $("#canvas").find(current).hide();
          coordinateTracker[1] += 1; // Changing the y-coordinate.
          // console.log(coordinateTracker);
          var replacement = checkCenter(coordinateTracker);
          $("#canvas").find(replacement).show();
          return coordinateTracker
          break;

          case 39: // right
          console.log("You clicked to go right!")
          var current = checkCenter(coordinateTracker);
          $("#canvas").find(current).hide();
          coordinateTracker[0] += 1;
          var replacement = checkCenter(coordinateTracker);
          $("#canvas").find(replacement).show();
          return coordinateTracker
          break;

          case 40: // down
          console.log("You clicked to go down!")
          var current = checkCenter(coordinateTracker);
          $("#canvas").find(current).hide();
          coordinateTracker[1] -= 1;
          var replacement = checkCenter(coordinateTracker);
          $("#canvas").find(replacement).show();
          return coordinateTracker
          break;

          default: return coordinateTracker; // exit this handler for other keys


      }



    });


});
