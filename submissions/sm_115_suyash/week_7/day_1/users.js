var btn2 = $('#page2')

// Display function
function getUserData(displayFunction) {
  var result = null;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', `https://reqres.in/api/users?page=2`);
  xhr.send()
  xhr.onload = function () {
    if (xhr.status == 200) {
      result = xhr.response;
      displayFunction(result);
    }
    else {
      console.log("Error Code is:" + xhr.status);
    }
  }
}

// Print user data
var printUserData = function (input) {
  var display = document.createElement('p');
  var showData = $('#showdata1')
  if (input == null) { // checking if the input is null
    display.textContent = "Error! No user data received or invalid request!";
    //It will print an error if the input is null
  }
  else {
    //If success print this
    var res = JSON.parse(input)
    console.log(res.data[0])
    res.data.forEach(function (val) {
      // console.log(val)
      for (key in val) {
        var para = document.createElement('p')
        para =key + ': ' + val[key];
        console.log(para)
        showData.append(para)
      }
    })

  }
  showData.append(display)
}


//Button and listener for the `click here to print the user data!` button
var displayBtn = document.querySelector('#page1')
displayBtn.addEventListener('click', function () {
  getUserData(printUserData);
});
