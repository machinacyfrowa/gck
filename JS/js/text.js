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

}