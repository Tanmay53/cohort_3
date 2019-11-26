var os = document.getElementById("os");
var div = document.getElementById("new");
var table = document.getElementById("table");
os.addEventListener("change", fetchApi);
function fetchApi() {
  var baseUrl = "http://localhost:8080/codenames/";
  var typeOfOs = os.value;
  var url = baseUrl + typeOfOs;
  createUrl(url);
}
function createUrl(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onload = function() {
    if ((xhr.status = 200)) {
      var data = JSON.parse(xhr.response);
      console.log(data);
      var tr = document.createElement("tr");
      var th = document.createElement("th");
      th.innerText = data.os;
      table.appendChild(tr);
      tr.appendChild(th);
      console.log(data.codenames);
      data.codenames.forEach(function(ele) {
        var tr = document.createElement("tr");
        for (key in ele) {
          var td = document.createElement("td");
          td.innerText = ele[key];
          tr.appendChild(td);
        }
        table.appendChild(tr);
      });
    } else {
      console.log("Error Code is :" + xhr.status);
    }
  };
}
