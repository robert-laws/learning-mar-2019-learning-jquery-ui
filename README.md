# Learning - Lynda: Learning JQuery UI

[Website for Course](https://learning-mar-2019-learning-jquery-ui.netlify.com/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/275af55b-f11b-4f43-926d-f4736871b72d/deploy-status)](https://app.netlify.com/sites/learning-mar-2019-learning-jquery-ui/deploys)

## Table of Contents

* [Basic JQuery UI Widgets](#basic-jquery-ui-widgets)
* [Advanced JQuery UI Widgets](#advanced-jquery-ui-widgets)
* [Behaviors and Effects](#behaviors-and-effects)

---

## Basic JQuery UI Widgets

Basic widgets include the [Spinner](https://api.jqueryui.com/spinner/), [Slider](https://api.jqueryui.com/slider/), [Selectmenu](https://api.jqueryui.com/selectmenu/), and [Accordion](https://api.jqueryui.com/accordion/) controls.

**Spinner Control**

```javascript
$("#spin-input").spinner();

// set initial value
$("#spin-input").spinner("value", 10);

// arguments
$("#spin-input").spinner({
  min: 0,
  max: 200,
  step: 25,
  page: 10
});
$("#spin-input").spinner("value", 50);
```
**Slider**

```javascript
$("#slide").slider();

// slider with a min and max value control
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
```

**Selectmenu**

```javascript
$("#select-menu").selectmenu();

// add a custom icon and a class specifying a fixed height
$("#select-menu").selectmenu({
  icons: { button: "ui-icon-lightbulb" }
}).selectmenu("menuWidget").addClass("fixedHeight");
```

**Accordion**

```javascript
$("#accordionControl1").accordion();
```

## Advanced JQuery UI Widgets

## Behaviors and Effects
