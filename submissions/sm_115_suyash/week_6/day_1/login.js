// UI variables
var userName = document.querySelector('#username');
var pass = document.querySelector('#password');
var btn = document.querySelector('#btn');
var showToken = document.querySelector('#show');

// Add event listener on button
btn.addEventListener('click', takeVal) 
// function for getting data from xmlHttp request
function getData(input) {
  // console.log('hello')
  var xhr = new XMLHttpRequest();
  var json = JSON.stringify(input)
  xhr.open('POST', 'http://localhost:8080/auth/login');
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(json);
  xhr.onload = function () {
    if (xhr.status == 200) {
      var val = xhr.response
      showToken.innerHTML = val
    } else {
      console.log(xhr.response)
      showToken.innerHTML = 'The username or password was incorrect, please try again!'
    }
  }
  xhr.addEventListener('error', function () {
    showToken.innerHTML = 'The username or password was incorrect, please try again!'
  })
}

// function for store value
function takeVal(e) {
  e.preventDefault()
  var matchObj = {
    'password': pass.value,
    'username' : userName.value
  }
  getData(matchObj);
}