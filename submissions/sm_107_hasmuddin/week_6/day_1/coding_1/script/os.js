select = document.getElementById("osOpp");
select.addEventListener("change", getData);
function getData() {
  var xhr = new XMLHttpRequest();
  var url = "http://localhost:8080/codenames/" + select.value;
  xhr.open("GET", url);
  xhr.onload = () => {
    if (xhr.status == 200) {
      display(JSON.parse(xhr.response));
    } else {
      console.log("ERROR");
    }
  };
  xhr.send();

  var display = input => {
    table.innerHTML = "";
    data = input.codenames;
    bodyEl = document.querySelector("body");
    table = document.getElementById("table");
    data.forEach(function(ele) {
      tr = document.createElement("tr");
      td1 = document.createElement("td");
      td1.textContent = ele.name;
      td2 = document.createElement("td");
      td2.textContent = ele.version;
      tr.appendChild(td1);
      tr.appendChild(td2);
      table.appendChild(tr);
      bodyEl.appendChild(table);
    });
  };
}
