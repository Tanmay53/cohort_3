var info = [];
$("#search").click(function() {
  var input = $("#input").val();
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://indreed.herokuapp.com/api/jobs/?q=" + input);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send();
  xhr.onload = function() {
    if (xhr.status == 200) {
      var data = JSON.parse(xhr.response);
      passData(data);
      var result = data.slice(0, 10);
      //   console.log(data);
      result.forEach(function(ele) {
        $("tbody").append(
          createTable(ele.title, ele.location, ele.company, ele.url)
        );
      });
    } else {
      console.log(xhr.status);
    }
  };
});
function createTable(title, location, company, url) {
  var table = "";
  table = `<tr>
  <td>${company}</td>
  <td>${title}</td>
  <td>${location}</td>
  <td><a href="${url}">visit link</a></td>
    </tr>`;
  return table;
}

function passData(data) {
  info = data;
}

function changePage() {
  i = 10;
  $("#tbody td").remove();
  var next = info.slice(i, i + 10);
  $("#tbody").text = "";
  console.log(next);
  next.forEach(function(ele) {
    $("tbody").append(
      createTable(ele.title, ele.location, ele.company, ele.url)
    );
  });
  i += 10;
}
