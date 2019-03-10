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
    ],
    start: function(evt, ui) {
      $(this).find("h2").text("Resizing...");
    }
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

// Drag and Drop
$(document).ready(function() {
  $("#drag1").draggable();

  $("#drag2").draggable({
    axis: "x",
    handle: "h2",
    revert: true
  });

  $("#drag3").draggable({
    handle: "h2"
  });

  $("#dropArea").droppable({
    accept: "#drag3",
    hoverClass: "dragHighlight",
    tolerance: "pointer", // options - fit, pointer, intersect, touch
    activate: function(evt, ui) {
      $(this).find("h2").css("background-color", "cornsilk");
    },
    deactivate: function(evt, ui) {
      $(this).find("h2").css("background-color", "");
    },
    drop: function(evt, ui) {
      $(this).find("h2").text("Dropped...");
      ui.draggable.find("h2").text("Item Dropped");
    }
  });
});