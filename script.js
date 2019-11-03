$(document).ready(function() {
  $("#about-content").show();

  $("#about-link").click(function() {
    $("#about-content").show();
    $("#music-content").hide();
    $("#contact-content").hide();
  });

  $("#music-link").click(function() {
    $("#about-content").hide();
    $("#music-content").show();
    $("#contact-content").hide();
  });

  $("#contact-link").click(function() {
    $("#about-content").hide();
    $("#music-content").hide();
    $("#contact-content").show();
  });
});