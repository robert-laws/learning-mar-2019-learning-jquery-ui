// advanced widgets

// progress bar
$(document).ready(function() {
  $("#progress1").progressbar({
    value: 40
  });
});

$(document).ready(function() {
  $("#progress2").progressbar({
    value: 70,
    complete: function(evt, elem) {
      alert("download complete");
    }
  });
});

$("#increaseProgress2").click(function() {
  var elem = $("#progress2");
  var val = elem.progressbar("value") || 0;
  elem.progressbar("value", val + 10);
  return false;
});

$(document).ready(function() {
  $("#progress3").progressbar({
    value: false
  });
});

// autocomplete

$(document).ready(function() {
  $("#auto1").autocomplete({
    source: fruitNames,
    autoFocus: true
  });
});

$(document).ready(function() {
  $("#auto2").autocomplete({
    source: getData,
    autoFocus: true
  })
});

function getData(req, callback) {
  var result = [];
  for(var i = 0; i < vegetableNames.length; i++) {
    if(vegetableNames[i].substring(0, 1) == req.term.toUpperCase()) {
      result.push(vegetableNames[i]);
    }
    callback(result);
  }
}

var fruitNames = [
  "Apple",
  "Banana",
  "Cantaloupe",
  "Grape",
  "Grapefruit",
  "Lemon",
  "Lime",
  "Mandarin Orange",
  "Orange",
  "Watermelon"
]

var vegetableNames = [
  "Artichoke",
  "Arugula",
  "Asparagus",
  "Bamboo Shoots",
  "Beans, Green",
  "Beets",
  "Belgian Endive",
  "Bitter Melon*",
  "Bok Choy",
  "Broadbeans (Fava Beans)",
  "Broccoli",
  "Broccoli Rabe",
  "Brussel Sprouts",
  "Cabbage, Green",
  "Cabbage, Red",
  "Carrot",
  "Cassava (Yuca Root)",
  "Cauliflower",
  "Celeriac (Celery Root)",
  "Celery",
  "Chayote*",
  "Chicory (Curly Endive)",
  "Collards",
  "Corn",
  "Crookneck",
  "Cucumber",
  "Daikon",
  "Dandelion Greens",
  "Edamame, Soybeans",
  "Eggplant",
  "Fennel",
  "Fiddleheads",
  "Ginger Root",
  "Horseradish",
  "Jicama",
  "Kale",
  "Kohlrabi",
  "Leeks",
  "Lettuce, Iceberg",
  "Lettuce, Leaf",
  "Lettuce, Romaine",
  "Mushrooms",
  "Mustard Greens",
  "Okra",
  "Onion (Red)",
  "Onions",
  "Parsnip",
  "Peas, Green",
  "Pepper, Green Red pepper Pepper, Sweet Red",
  "Potato, Red",
  "Potato, White Potato, Yellow",
  "Pumpkin",
  "Radicchio",
  "Radishes",
  "Rutabaga",
  "Salsify (Oysterplant)",
  "Shallots",
  "Snow Peas",
  "Sorrel (Dock)",
  "Spaghetti Squash",
  "Spinach",
  "Squash, Butternut",
  "Sugar Snap Peas",
  "Sweet Potato",
  "Swiss Chard",
  "Tomatillo",
  "Tomato",
  "Turnip",
  "Watercress",
  "Yam Root",
  "Zucchini"
]

// dialog

$(document).ready(function() {
  // dialog 1
  $("#dialog1").dialog({
    autoOpen: false
  });

  $("#openDialog1").click(function() {
    $("#dialog1").dialog("open");
  })

  // dialog 2
  $("#dialog2").dialog({
    autoOpen: false,
    buttons: [
      {
        text: "OK",
        click: function() {
          $(this).dialog("close");
        }
      },
      {
        text: "Cancel",
        click: function() {
          $(this).dialog("close");
        }
      }
    ]
  });

  $("#openDialog2").click(function() {
    $("#dialog2").dialog("open");
  });

  // dialog 3
  $("#dialog3").dialog({
    autoOpen: false,
    closeOnEscape: false,
    draggable: false,
    modal: true,
    buttons: [
      {
        text: "OK",
        click: function() {
          $(this).dialog("close");
        }
      }
    ]
  });

  $("#openDialog3").click(function() {
    $("#dialog3").dialog("open");
  });
})