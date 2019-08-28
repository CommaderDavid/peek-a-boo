$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".fading").click(function() {
    $("#cat-showing").fadeToggle();
    $("#cat-hidden").fadeToggle();
  });

  $(".slide").click(function() {
    $("#dog-down").slideToggle();
    $("#dog-up").slideToggle();
  });
});
