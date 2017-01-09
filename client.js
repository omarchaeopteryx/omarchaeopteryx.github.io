$( document ).ready(function() {
    console.log( "Hello again, World!" );
    var coordinateTracker = [0,0];
    var centerBox = $(this).find("#center-box");

    function checkCenter() {
      console.log(coordinateTracker[0]===0 && coordinateTracker[1]===0)
    }

    // Use this area to make mobile functionality:

    $("#center-box").on("swipeleft",function(){
      coordinateTracker[0] += 1;
      console.log(coordinateTracker);
      var newItem = $("#my-contact").show();
      centerBox.html(newItem);
    });

    // Use this area to make desktop functionality:

    $(document).keydown(function(e) {

      switch(e.which) {
          case 37: // left
          console.log("You clicked to go left!")
          coordinateTracker[0] -= 1; // Changing the x-coordinate.
          console.log(coordinateTracker);
                checkCenter();
          break;

          case 38: // up
          console.log("You clicked to go up!")
          coordinateTracker[1] += 1; // Changing the y-coordinate.
          console.log(coordinateTracker);
                checkCenter();
          break;

          case 39: // right
          console.log("You clicked to go right!")
          coordinateTracker[0] += 1;
          console.log(coordinateTracker);
          var newItem = $("#my-contact").show();
          centerBox.html(newItem);
                checkCenter();
          break;

          case 40: // down
          console.log("You clicked to go down!")
          coordinateTracker[1] -= 1;
          console.log(coordinateTracker);
                checkCenter();
          break;

          default: return; // exit this handler for other keys
      }
      e.preventDefault(); // prevent the default action (scroll / move caret)
    });


});
