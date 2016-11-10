/*jslint browser: true*/
/*global $, jQuery, alert*/

//Toggle Navbar in small screen
$(document).ready(function(){
    $("nav #Menu-toggle").on("click", function(){
        $("nav .nav-list").slideToggle(800);
    });
});
