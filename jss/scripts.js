$(function() {
  $("button#light").click(function() {
    $("body,h1,h2,p").removeClass();
    $("body").addClass("white-background");
    $("h1,h2,p").addClass("black-text");
  });

  $("button#dark").click(function () {
    $("body,h1,h2,p").removeClass();
    $("body").addClass("black-background");
    $("h1,h2,p").addClass("white-text");
  });
});
