$(document).ready(function() {
  $("#os").change(function() {
    var os = $("#os").val();
    var base = "http://localhost:8080/codenames/";
    var url = base + os;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function() {
      if (xhr.status == 200) {
        var data = xhr.response;
        data = JSON.parse(data);
        $("#body").text("");
        data.codenames.forEach(function(ele) {
          for (key in ele) {
            $("#body").append(createTable(key, ele[key]));
          }
        });
      } else {
        console.log(xhr.status);
      }
    };
  });

  function createTable(name, value) {
    var card = "";
    card = `<div class ="card-header"><h5>${name}<p class="lead">${value}</p></h5></div>`;
    return card;
  }
});
