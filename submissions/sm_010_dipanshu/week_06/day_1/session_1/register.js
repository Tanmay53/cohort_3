var verbose = true;

var reqObj = {};
var inputs = [];
var json = "";

function callApi() {
  validateInputs();
  createJSON();
  request();
}

function validateInputs() {
  var inp = document.querySelectorAll("input");

  inputs = [];
  for (var i = 0; i < inp.length; i++) {
    if (inp[i].value == "") {
      alert(inp[i].name + " cannot be empty");
      return;
    } else {
      if (verbose) {
        console.log(inp[i].name, inp[i].value);
      }
      inputs.push(inp[i].value);
    }
  }
}

function createJSON() {
  reqObj["name"] = inputs[0];
  reqObj["email"] = inputs[1];
  reqObj["password"] = inputs[2];
  reqObj["username"] = inputs[3];
  reqObj["mobile"] = inputs[4];
  reqObj["description"] = inputs[5];

  jsonReq = JSON.stringify(reqObj);

  if (verbose) {
    console.log("Request object created", reqObj);
    console.log("Request json created", jsonReq);
  }
}

function request() {
  var xhr = new XMLHttpRequest();

  xhr.open("POST", "http://localhost:8080/auth/register");

  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

  xhr.send(jsonReq);

  var result = null;
  resultObj = {};

  xhr.onload = function() {
    if (xhr.status == 200) {
      result = xhr.response;
      if (verbose) {
        console.log("Repsone from API", result);
      }

      resultObj = JSON.parse(result);
      alert(resultObj.message);
    } else {
      alert("Error Code is:" + xhr.status);
    }
  };

  var inp = document.querySelectorAll("input");

  for (var i = 0; i < inp.length; i++) {
    inp[i].value = "";
  }
}
