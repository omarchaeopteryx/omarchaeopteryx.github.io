$(document).ready(function(){

    console.log("we're in!");

    $(window).load(function() {
    // start up after 2sec no matter what
    window.setTimeout(function(){
        $('body').removeClass("loading").addClass('loaded');
    }, 2000);
});


    });