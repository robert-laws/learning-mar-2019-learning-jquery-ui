// Behaviors and Effects

// Resize
$(document).ready(function() {
  $("#resize1").resizable();

  $("#resize2").resizable({
    aspectRatio: true,
    distance: 15
  });

  $("#resize3").resizable({
    grid: [
      20, 10
    ]
  });

  $("#resize4").resizable({
    minHeight: 150,
    minWidth: 150,
    maxHeight: 500,
    maxWidth: 800,
    start: function(evt, ui) {
      ui.element.css("background-color", "green");
    },
    stop: function(evt, ui) {
      ui.element.css("background-color", "");
    },
    resize: function(evt, ui) {
      $(this).text("w: " + Math.round(ui.element.width()) + ", h: " + Math.round(ui.element.height()));
    }
  })
});