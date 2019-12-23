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

// function getYear() {
//   var year = new Date().getFullYear;
//   return year;
// }
// getYear()
// console.log(year)

// const isAuth

// console.log(isAuth)

// function getName() {
//   var status = true;
//   if (status) {
//     const name = 'masai'
//   }
//   console.log(name)
// }

// getName()

// const email = 'dhjauh@gmail.com'
// let name = 'sjdbf'

// email = 'hfdfcd@jnfjf.ncn'
// name = 'jdisjg'

// const arr = ['shdlkf', 'fuhsdk', 'ghsd']
// arr[0]= 'lkjh'
// console.log(arr)

// console.log(name)

// var name = 'shidix'