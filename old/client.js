var coordinateTracker = [0,0];

// New: Add dynamic scrolling on My Story page.

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".story-text").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
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
      // console.log("you changed to... " + centerWindow)
      return centerWindow

    }

    function checkArrows(coordinateTracker) {

      if (checkCenter(coordinateTracker) === "#center-box") {
        // console.log("You are at center box.")
        $(".fa").show()
      } else if (checkCenter(coordinateTracker) === "#left-box") {
        // console.log("You are in left box.")
        $(".fa").hide()
        $(".fa.fa-chevron-right").show()
      } else if (checkCenter(coordinateTracker) === "#right-box") {
        // console.log("You are in right box.")
        $(".fa").hide()
        $(".fa.fa-chevron-left").show()
      } else if (checkCenter(coordinateTracker) === "#lower-box") {
        // console.log("You are in lower box.")
        $(".fa").hide()
        $(".fa.fa-chevron-up").show()
      } else if (checkCenter(coordinateTracker) === "#upper-box") {
        // console.log("You are in upper box.")
        $(".fa").hide()
        $(".fa.fa-chevron-down").show()
      }
    }

    function findCurrent() {

      var current = checkCenter(coordinateTracker);
      $("#canvas").find(current).hide();
      // console.log(current);
      return current

    }

    function replaceCurrent() {

      window.scrollTo(0, 0);
      var replacement = checkCenter(coordinateTracker);
      $("#canvas").find(replacement).fadeIn();
      return coordinateTracker

    }

    // Use this area to make desktop functionality:

      // // Making arrows clickeable:


      $(".fa.fa-chevron-left").on("click", function(){

        findCurrent();
        coordinateTracker[0] -= 1; // Changing the x-coordinate.
        checkArrows(coordinateTracker);
        replaceCurrent();

      })

      $(".fa.fa-chevron-up").on("click", function() {

        findCurrent();
        coordinateTracker[1] += 1; // Changing the y-coordinate.
        checkArrows(coordinateTracker);
        replaceCurrent();

          })

      $(".fa.fa-chevron-right").on("click", function() {

        findCurrent();
        coordinateTracker[0] += 1;
        checkArrows(coordinateTracker);
        replaceCurrent();
      })

      $(".fa.fa-chevron-down").on("click", function() {

        findCurrent();
        coordinateTracker[1] -= 1;
        checkArrows(coordinateTracker);
        replaceCurrent();

      })

      // Alternative way to get to contacts page:

      $("#link-contact").on("click", function() {

        findCurrent();
        coordinateTracker[0] += 2;
        checkArrows(coordinateTracker);
        replaceCurrent();

      })

      // // Making the directional keys operational:

    $(document).keydown(function(e) {

      e.preventDefault();

      switch(e.which) {

          case 37: // left
          // console.log("You clicked to go left!")
          findCurrent();
          coordinateTracker[0] -= 1; // Changing the x-coordinate.
          checkArrows(coordinateTracker);
          replaceCurrent();
          break;

          case 38: // up
          // console.log("You clicked to go up!")
          findCurrent();
          coordinateTracker[1] += 1; // Changing the y-coordinate.
          checkArrows(coordinateTracker);
          replaceCurrent();
          break;

          case 39: // right
          // console.log("You clicked to go right!")
          findCurrent();
          coordinateTracker[0] += 1;
          checkArrows(coordinateTracker);
          replaceCurrent();
          break;

          case 40: // down
          // console.log("You clicked to go down!")
          findCurrent();
          coordinateTracker[1] -= 1;
          checkArrows(coordinateTracker);
          replaceCurrent();
          break;

          default: return coordinateTracker; // exit this handler for other keys

      }

    });

    // FIX - Add mobile functionality:

    $("main").on("swipeleft", function() {

      // console.log("You swiped to go right!")
      findCurrent();
      coordinateTracker[0] += 1;
      replaceCurrent();

    });

});
