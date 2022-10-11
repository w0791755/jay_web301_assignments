function jsonCall() {
  $.getJSON("team.json", function (data) {
    var items = [];
    $.each(data, function (key, val) {
      items.push("<div id='" + key + "'>" +
        "<h2>" + "Name: " + val.name + "</h2>" +
        "<h5>" + "Position: " + val.position + "</h5>" +
        "<p>" + "Bio: " + val.bio + "</p>"
        + "</div>");
    });

    $("<ul/>", {
      "class": "team",
      html: items.join("")
    }).appendTo("#team");
  });
}


function ajaxCall() {
  var delay = 2000;
  $.ajax({
    url: 'team.json',
    dataType: 'json',
    beforeSend: function () {
      $("#loader").show().delay(3000).fadeOut();

    },
    success: function (data) {
      setTimeout(function () {
        $('#transfer1').html(data).css("display", "block");
        var items = [];
        $.each(data, function (key, val) {
          items.push("<div id='" + key + "'>" +
            "<h2>" + "Name: " + val.name + "</h2>" +
            "<h5>" + "Position: " + val.position + "</52>" +
            "<p>" + "Bio: " + val.bio + "</p>"
            + "</div>");
        });
        $('<ul/>', {
          'class': 'team',
          html: items.join('')
        }).delay(3000).appendTo('#team');
      }, delay);
    },
    statusCode: {
      404: function () {
        alert('The content could not be retrived!');
      }
    }
  });
};

$(document).ready(function () {
  ajaxCall();
});