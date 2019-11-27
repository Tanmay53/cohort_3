//UI Variables declare 
var os = document.querySelector("#operating-system");
var getValue = document.querySelector('.fetchdata');
var table = document.querySelector('.table');

// Add Event on OS
os.addEventListener('change', changeServer);

// Function for get value
function changeServer() {
  // creat variable for store new request
  var xhr = new XMLHttpRequest();
  // Get request to URL
  xhr.open('GET', 'http://localhost:8080/codenames/' + os.value);
  // Get request to server
  xhr.send();
  // Function call after recived information from url
  xhr.onload = function () {
    // Success status
    if (xhr.status == 200) {
      // Clear table 
      table.innerHTML = '';
      // Parse and store value from URL
      var val = JSON.parse(xhr.response);
      // Create tr
      var tr = document.createElement('tr');
      // Creat th
      var th = document.createElement('th');
      // Store value in th
      th.innerHTML = os.value;
      // th append in tr
      tr.appendChild(th);
      // tr append in table
      table.appendChild(tr);
      // apply for loop in key of val variable
      val.codenames.forEach(function (keyVal) {
        // create tr
        var tr = document.createElement('tr');
        // Apply for loop in keyVal
        for (key in keyVal) {
          // create th and store value
          var th = document.createElement('th');
          // store value in th
          th.innerHTML = keyVal[key];
          // th append in tr
          tr.appendChild(th);
          // tr append in table
          table.appendChild(tr);
        }
      });
      // Clear value for store new value
      if (os.value == 'null') {
        table.innerHTML = '';
      }
    }
    else {
      // Unsussess code
      console.log(' error code is '+xhr.status)
    }
  }
}