var verbose = true;

var inputs = [];
var reqObj = {};
var jsonReq = "";

function callApi() {
  if (validateInputs()) {
    createJSON();
    requestToken();
  }
}

function validateInputs() {
  var inp = document.querySelectorAll("input");

  inputs = [];
  for (var i = 0; i < inp.length; i++) {
    if (inp[i].value == "") {
      alert(inp[i].name + " cannot be empty");
      return false;
    } else {
      if (verbose) {
        console.log(inp[i].name, inp[i].value);
      }
      inputs.push(inp[i].value);
    }
  }

  if (verbose) {
    console.log(inputs);
  }

  return true;
}

function createJSON() {
  reqObj = {};
  reqObj["username"] = inputs[0];
  reqObj["password"] = inputs[1];

  jsonReq = JSON.stringify(reqObj);

  if (verbose) {
    console.log("Request object created", reqObj);
    console.log("Request json created", jsonReq);
  }
}

function requestToken() {
  var xhr = new XMLHttpRequest();

  xhr.open("POST", "http://localhost:8080/auth/login");

  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

  xhr.send(jsonReq);

  var result = null;
  xhr.onload = function() {
    if (xhr.status == 200) {
      result = xhr.response;
      if (verbose) {
        console.log("Repsone from auth API", result);
      }

      resultObj = JSON.parse(result);
      displayData(resultObj.token);
    } else {
      alert("Error Code is:" + xhr.status);
    }
  };

  xhr.onerror = function() {
    alert("The username or password was incorrect, please try again");
  };
}

function displayData(token) {
  var cont = document.getElementById("container");
  cont.innerHTML = "";

  requestProfile(token);
}

function requestProfile(token) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://localhost:8080/user/" + reqObj.username);

  xhr.setRequestHeader("Authorization", "Bearer " + token);

  xhr.send();

  xhr.onload = function() {
    if (xhr.status == 200) {
      result = xhr.response;
      if (verbose) {
        console.log("Repsone from username API", result);
      }

      resultObj = JSON.parse(result);
      tabulate(resultObj);
    } else {
      alert("Error Code is:" + xhr.status);
    }
  };
}

function tabulate(obj) {
  var container = document.getElementById("container");

  var table = document.createElement("table");
  table.setAttribute(
    "class",
    "table table-striped table-bordered table-hover shadow-lg mt-5"
  );
  container.appendChild(table);

  for (key in obj) {
    var trow = document.createElement("tr");
    var thead = document.createElement("th");
    var tdata = document.createElement("td");

    thead.setAttribute("class", "text-info");

    thead.textContent = key;
    tdata.textContent = obj[key];

    trow.appendChild(thead);
    trow.appendChild(tdata);
    table.appendChild(trow);
  }
}
