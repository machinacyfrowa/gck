$( window ).resize(function() {
    graduation();
});

$( window ).ready(function() {
    graduation();

});

function graduation(){

    var maxHeight = 0;
    $( ".event-title" ).css("height","auto");
    $(".event-title").each(function() {
      if ($(this).outerHeight() > maxHeight) {
        maxHeight = $(this).outerHeight();
      }
    }).height(maxHeight);

    maxHeight = 0;
    $( ".event-grid p" ).css("height","auto");
    $(".event-grid p").each(function() {
      if ($(this).outerHeight() > maxHeight) {
        maxHeight = $(this).outerHeight();
      }
    }).height(maxHeight);
    /*
    var lastHight = -1;
    var maxHight =  -1;
    var mainElement = $(".event-grid:first>div").length;
    var stop = false; 
    $( ".event-title" ).css("height","auto");
    $( ".event-grid p" ).css("height","auto");
    $( ".event-title" ).each(function( i ) {
        //if((i+1) > mainElement && stop === false ){lastHight =-1;stop = true; }
        if(lastHight > $(this).outerHeight()){
            maxHight = lastHight;
            console.log("JEST :"+ maxHight);
        }
        console.log("test "+ $(this).outerHeight());
        lastHight =  $(this).outerHeight();
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

    */
}