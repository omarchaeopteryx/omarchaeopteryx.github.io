$( document ).ready(function() {
    console.log( "Hello again, World!" );
    var coordinateTracker = [0,0];

    // Use this area to make mobile functionality:

    $("#center-box").on("swiperight",function(){
        alert("You swiped right!");
    });

    // Use this area to make desktop functionality:

    $(document).keydown(function(e) {
      var centerBox = $(this).find("#center-box");

    switch(e.which) {
        case 37: // left
        console.log("You clicked to go left!")
        coordinateTracker[0] -= 1;
        console.log(coordinateTracker);
        break;

        case 38: // up
        console.log("You clicked to go up!")
        break;

        case 39: // right
        console.log("You clicked to go right!")
        coordinateTracker[0] += 1;
        console.log(coordinateTracker);
        var newItem = $("#my-contact").show();
        centerBox.html(newItem);


        break;

        case 40: // down
        console.log("You clicked to go down!")
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

});
