$(document).ready(function() {
    //if no method and options specified
    //start the floating animation with defaults settings
    $('object').jqFloat();
 
    //if only options specified
    //start the floating animation with specified settings
    $('object').jqFloat({
        width: 300,
        height: 300,
        speed: 100
    });
 
    //stop the floating animation 
    $('object').jFloat('stop');
 
    //start the floating animation
    $('object').jFloat('play');
});