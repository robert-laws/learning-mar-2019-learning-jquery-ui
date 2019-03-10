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
})