var verbose = false;
var clearConsole = true;
var baseURL = "https://reqres.in/api";

var email = "";
var password = "";
var requestJSON = "";
var token = "Dipanshu";

$("#login").click(function() {
  if (clearConsole) {
    console.clear();
  }

  if (validateInputs()) {
    prepareRequest();
    sendRequest();
  }
});

function validateInputs() {
  email = $("#email").val();
  password = $("#password").val();

  if (email == "") {
    alert("Please enter email");
    return false;
  }
  if (password == "") {
    alert("Please enter password");
    return false;
  }

  if (verbose) {
    console.log("Email entered-", email);
    console.log("Password entered-", password);
  }

  return true;
}

function prepareRequest() {
  var requestObj = {};
  requestObj["email"] = email;
  requestObj["password"] = password;

  requestJSON = JSON.stringify(requestObj);

  if (verbose) {
    console.log("Request object created");
    console.table(requestObj);
    console.log("Request JSON created", requestJSON);
  }
}

function sendRequest() {
  var xhr = new XMLHttpRequest();

  var url = baseURL + "/login";

  xhr.open("POST", url);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.send(requestJSON);

  if (verbose) {
    console.log("Post request send to", url);
  }

  xhr.onload = function() {
    var responseJSON = "";
    if (xhr.status == 200) {
      responseJSON = xhr.response;

      var responseObj = JSON.parse(responseJSON);
      token = responseObj["token"];

      if (verbose) {
        console.log("Response JSON from API", responseJSON);
        console.log("Response object");
        console.table(responseObj);
        console.log("Token retrieved", token);
      }

      displayToken();
    } else if (xhr.status == 400) {
      alert("Credentials do not match. Please try again");
    }
  };

  xhr.onerror = function() {
    alert("Something went wrong. Please try again.");
  };
}

function displayToken() {
  $(".container").html("");

  var table = document.createElement("table");
  var row = document.createElement("tr");
  var thead = document.createElement("th");
  var tdata = document.createElement("td");

  thead.textContent = "Token";
  tdata.textContent = token;

  table.setAttribute("id", "table");
  thead.setAttribute("class", "text-info");
  tdata.setAttribute("class", "text-danger");

  row.appendChild(thead);
  row.appendChild(tdata);
  table.appendChild(row);
  $(".container").append(table);

  $("#table").addClass(
    "table border table-bordered shadow shadow-lg mt-5 p-3 text-center"
  );
}
