// basic widgets

// spinner
$(document).ready(function() {
  $("#spin1").spinner();
});

$(document).ready(function() {
  $("#spin2").spinner();
  $("#spin2").spinner("value", 1);
});

$(document).ready(function() {
  $("#spin3").spinner({
    min: 0,
    max: 500,
    step: 10,
    page: 10
  });
  $("#spin3").spinner("value", 50);
});

// slider
$(document).ready(function() {
  $("#slide1").slider();
});

$(document).ready(function() {
  $("#slide2").slider({
    animate: 1000
  });
});

$(document).ready(function() {
  $("#slide3").slider({
    value: 25,
    min: 0,
    max: 200,
    step: 25,
    animate: 500,
    slide: function(evt, elem) {
      $("#amt").text(elem.value);
    },
    start: function(evt, elem) {
      $("#amt").addClass("heavyText");
    },
    stop: function(evt, elem) {
      $("#amt").removeClass("heavyText");
    }
  });
  $("#amt").text($("#slide3").slider("value"));
});

$(document).ready(function() {
  $("#slide4").slider({
    range: true,
    min: 500,
    max: 5000,
    values: [1500, 3000],
    slide: function(evt, elem) {
      $("#val1").text(elem.values[0]);
      $("#val2").text(elem.values[1]);
    }
  });
  $("#val1").text($("#slide4").slider("values", 0));
  $("#val2").text($("#slide4").slider("values", 1));
});