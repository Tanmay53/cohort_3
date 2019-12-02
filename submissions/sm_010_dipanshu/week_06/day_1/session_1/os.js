var selOs = document.getElementById("selOs");
selOs.addEventListener("change", function() {
  getOsData(displayOsDetails);
});

fetchAllData();

var res = [];

function fetchDataFor(input) {
  var result = null;
  obj = {};
  var xhr = new XMLHttpRequest();
  url = "http://localhost:8080/codenames/" + input;
  xhr.open("GET", url);
  xhr.send();
  xhr.onload = function() {
    if (xhr.status == 200) {
      result = xhr.response;
      obj = JSON.parse(result);
      res.push(obj);
    } else {
      console.log("Error code is", xhr.status);
    }
  };
}

function fetchAllData() {
  fetchDataFor("android");
  fetchDataFor("ubuntu");
  fetchDataFor("windows");
  fetchDataFor("macos");
}

function getOsData(displayFunction) {
  dispVal = selOs.value;
  console.log(res);
  var output = res.filter(function(e) {
    return e["os"] == dispVal;
  });
  console.log(output);

  osData = output[0];
  console.log(osData);

  osCodenames = osData.codenames;
  console.log(osCodenames);

  versions = [];
  names = [];

  for (var i = 0; i < osCodenames.length; i++) {
    versions.push(osCodenames[i].version);
    names.push(osCodenames[i].name);
  }
  console.log(versions);
  console.log(names);

  displayFunction(versions, names);
}

displayOsDetails = function(versions, names) {
  console.log("In display function");
  console.log(versions, names);

  var container = document.getElementById("display-cont");
  container.innerHTML = ""
  var table = document.createElement("table");
  table.setAttribute("class","table table-dark text-center")
  container.appendChild(table);

  row = document.createElement("tr");
  table.appendChild(row);

  thead1 = document.createElement("th");
  thead2 = document.createElement("th");
  thead1.textContent = "Version";
  thead2.textContent = "Name";
  thead1.setAttribute("class","display-4 text-primary")
  thead2.setAttribute("class","display-4 text-primary")
  row.appendChild(thead1);
  row.appendChild(thead2);

  for (var i = 0; i < versions.length; i++) {
    trow = document.createElement("tr");
    table.appendChild(trow);

    tdata1 = document.createElement("td");
    tdata1.textContent = versions[i];
    tdata2 = document.createElement("td");
    tdata2.textContent = names[i];

    tdata1.setAttribute("class","text-danger")
    tdata2.setAttribute("class","text-danger")

    trow.appendChild(tdata1);
    trow.appendChild(tdata2);
  }
};
