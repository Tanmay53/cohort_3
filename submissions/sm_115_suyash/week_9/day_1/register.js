// UI variables
var output = document.querySelector('#output'); 
var email = document.querySelector('#email');
var pass = document.querySelector('#password');
var btn = $('.btn');


// add listener on button
btn.click(function (e) {
  e.preventDefault();
  $.ajax({
    method: "POST",
    url: "https://reqres.in/api/register",
    data: postData()
  })
    .done(function (res) {
      print(res)
    });
});

// Take input value
function postData() {
  var obj = {
    email: email.value,
    password: pass.value
  }
  return obj;
}

// Print output on UI
function print(res) {
  console.log(res.token)
  output.innerHTML = res.token;
}


