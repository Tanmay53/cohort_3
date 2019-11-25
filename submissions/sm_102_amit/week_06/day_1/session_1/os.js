var os = document.getElementById("operating_system");
os.addEventListener("change", showOS);

function showOS() {
  var os = event.target.value;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:8080/codenames/" + os);
  xhr.send();
  xhr.onload = function() {
    if (xhr.status == 200) {
      showTable(xhr.response);
      console.table(xhr.response);
    } else {
      console.log("Error Code is:" + xhr.status);
    }
  };
}

function showTable(res) {
  var response = JSON.parse(res);
  var table = document.getElementById("table");
  table.innerHTML = "";
  var thead = document.createElement("tr");
  var th = document.createElement("th");
  th.setAttribute("colspan", 2);
  th.setAttribute("class", "text-uppercase");
  th.innerText = response.os;
  thead.appendChild(th);
  table.appendChild(thead);
  response.codenames.forEach(function(data) {
    var tr = document.createElement("tr");
    for (key in data) {
      var td = document.createElement("td");
      td.innerText = data[key];
      tr.appendChild(td);
    }

    table.appendChild(tr);
  });
}
