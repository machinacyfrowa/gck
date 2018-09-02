$( window ).resize(function() {
    graduation();
});

$( window ).ready(function() {
    graduation();

});

function graduation(){
    var lastHight = -1;
    var maxHight =  -1;
    var mainElement = $(".event-grid:first>div").length;
    var stop = false; 
    $( ".event-title" ).each(function( i ) {
        if((i+1) > mainElement && stop === false ){lastHight =-1;stop = true; }
        if(lastHight >= $(this).height()){
            maxHight = lastHight;
        }
        console.log("test "+ $(this).height());
        lastHight =  $(this).height();
    });
    $(".event-title").height(maxHight);
    lastHight = -1;
    stop = false;
    $( ".event-grid p" ).each(function( i ) {
        if((i+1) >= mainElement && stop === false ){lastHight =-1;stop = true; }
        if(lastHight > $(this).height()){
            maxHight = lastHight; 
        }
        console.log("test2 "+ $(this).height());
        lastHight =  $(this).height();
    });
    $(".event-title").height(lastHight);
}