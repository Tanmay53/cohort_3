// UI variables
var fname = document.querySelector('#name');
var num = document.querySelector('#number');
var email = document.querySelector('#email');
var userName = document.querySelector('#userName');
var pass = document.querySelector('#password');
var des = document.querySelector('#description');
var btn = document.querySelector('#btn');
var form = document.querySelector('#form');

// Send Data function
function sendData(sendObj) {
  var xhr = new XMLHttpRequest();
  console.log(sendObj)
  // convert data into JSON format
  var json = JSON.stringify(sendObj);

  xhr.open('POST', 'http://localhost:8080/auth/register')
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(json);

  xhr.addEventListener('load', function () {
    if (xhr.status == 200) {
      console.log(xhr.response)
      // var div = document.createElement('div')
      // var val = xhr.response;
      // div.insertBefore(form,val)
    } else {
      console.log('Error code is : ' + xhr.response)
    }
  })
}

// Add Event Listener to button
btn.addEventListener('click', takeValue) 

// function for sending data
function takeValue(e) {
  e.preventDefault()
  // alert('hello')
  var sendObj = {
    'name': fname.value,
    'email': email.value,
    'password': pass.value,
    'username': userName.value,
    'mobile': num.value,
    'description': des.value
  }
  
  // Send sendObj to function
  sendData(sendObj);
}

