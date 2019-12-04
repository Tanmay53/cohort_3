$('#form-btn').click(function (e) {
  e.preventDefault();
  console.log('hello')

  var login = {
    email: $('#staticEmail').val(),
    password: $('#inputPassword').val()
  };
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://reqres.in/api/login');
  xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8');
  xhr.send(JSON.stringify(login));
  xhr.onload = () => {
    if (xhr.status == 200) {
      showMessage(JSON.parse(xhr.response), true);
    } else {
      showMessage(JSON.parse(xhr.response), false);
    }
  };
});