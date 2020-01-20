function getData(displayFunction, val) {
    var result = null;
    var xhr = new XMLHttpRequest();
    var url = 'http://localhost:8080/codenames/' + val
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status == 200) {
        result = JSON.parse(xhr.response);
        var os_version = []
        var os_name = []

        for (var i = 0; i < result["codenames"].length; i++) {
          var temp = (Object.values(result["codenames"][i]));
          os_version.push(temp[0])
          os_name.push(temp[1])
        }

        displayFunction(os_name);
        displayFunction(os_version);
      }
      else {
        console.log("Error Code is:" + xhr.status);
      }
    }
  }

  var printUserData = function (input) {
    var body = document.querySelector('body');
    var display = document.createElement('p');
    if (input == null) {
      display.textContent = 'Error! No user data received or invalid request!';
    }
    else {
      display.textContent = input;
    }
    body.append(display);
  }

  var displayBtn = document.getElementById('printOS')
  displayBtn.addEventListener('click', function () {
    var val = document.getElementById('os').value;
    getData(printUserData, val);
  });