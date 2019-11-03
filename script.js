$(document).ready(function() {
  $("#about-content").show();

  $("#about-link").click(function() {
    $("#about-content").fadeIn();
    $("#music-content").hide();
    $("#contact-content").hide();
  });

  $("#music-link").click(function() {
    $("#about-content").hide();
    $("#music-content").fadeIn();
    $("#contact-content").hide();
  });

  $("#contact-link").click(function() {
    $("#about-content").hide();
    $("#music-content").hide();
    $("#contact-content").fadeIn();
  });
});