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

    $(document).ready(function () {
        $("ul.menu>li").on("click", "a", function (event) {
            $(".menu .active").removeClass("active");
            $(this).addClass("active");
        });
    });