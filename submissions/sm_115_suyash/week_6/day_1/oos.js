// UI variables decalre
var os = document.querySelector('#operating-system');
var table = document.querySelector('.table');

// add Event Listner
os.addEventListener('change', changeServer);

// Function for recieve data from API
function changeServer() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:8080/codenames/' + os.value);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status == 200) {
      var val = JSON.parse(xhr.response)
      print(val)
    } else {
      console.log(xhr.status)
    }
  }
}

// Function for print value
function print(input) {
  // Create tr
  var tr = document.createElement('tr');
  // Create td
  var th = document.createElement('td');
  // store value in td
  th.innerHTML = os.value;
  // td append in tr
  tr.appendChild(th);
  // tr append in table
  table.appendChild(tr);
  input.codenames.forEach(function (keyVal) {
    // Create tr
    var tr = document.createElement('tr');
    for (key in keyVal) {
      // Create td
      var td = document.createElement('td');
      td.innerHTML = keyVal[key];
      tr.appendChild(td);
      table.appendChild(tr);
    };
  });
};