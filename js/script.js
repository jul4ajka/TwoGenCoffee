$( document ).ready(function() {

    $( ".cross" ).hide();
    $( ".menu_mobile" ).hide();
    $( ".hamburger" ).click(function() {
    $( ".menu_mobile" ).slideToggle( "slow", function() {
    $( ".hamburger" ).hide();
    $( ".cross" ).show();
    });
    });
    
    $( ".cross" ).click(function() {
    $( ".menu_mobile" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    });
    });
    
    });