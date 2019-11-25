var select = document.getElementById("os");
select.addEventListener("change", getData);
var table = document.getElementById("table");
var responseData;
// Get Data
function getData() {
  var base_url = "http://localhost:8080/codenames/";
  var parameter = select.value;
  var url = base_url + parameter;
  createHTTPCall(url);
}
//create HTTP Call
function createHTTPCall(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function() {
    if (this.status == 200) {
      responseData = JSON.parse(this.responseText);
      showUI(responseData);
    }
  };

  xhr.send();
}

// showUI
function showUI(data) {
  table.innerHTML = "";
  console.log(data);
  var tblr = document.createElement("tr");
  var tblh = document.createElement("th");
  tblh.innerText = data.os;
  tblr.appendChild(tblh);
  table.appendChild(tblr);
  data.codenames.forEach(function(val) {
    var tblr = document.createElement("tr");
    for (key in val) {
      var tbld = document.createElement("td");
      tbld.innerText = val[key];
      tblr.appendChild(tbld);
    }
    table.appendChild(tblr);
  });
}
