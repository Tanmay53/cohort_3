var email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
$('#email').keyup(function() {
  if (!email.exec($(this).val())) {
    $(this).addClass('is-invalid');
    $('#email-val').removeClass('invisible');
  } else {
    $('#email-val').addClass('invisible');
    $(this).removeClass('is-invalid');
    $(this).addClass('is-valid');
    $('#password-block').removeClass('d-none');
  }
});

var password = /[a-z]/;
$('#password').keyup(function() {
  if (!password.exec($(this).val())) {
    $('#password-val').removeClass('invisible');
    $(this).addClass('is-invalid');
  } else {
    $('#password-val').addClass('invisible');
    $(this).removeClass('is-invalid');
    $(this).addClass('is-valid');
    $('#submit').removeClass('d-none');
  }
});

$('#submit').click(function() {
  event.preventDefault();

  var login = {
    email: $('#email').val(),
    password: $('#password').val()
  };
  var url = 'https://reqres.in/api/login';
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

function showMessage(response, flag) {
  $('.login').hide();
  $('.list-group').removeClass('d-none');
  if (flag) {
    $('#data').html('Token : ' + response.token);
  } else {
    $('#data').html('Invalid User Name and Password ');
  }
}
