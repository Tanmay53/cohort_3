let fname;
let lname;
let username;
let password;
let email;
let address;
let phone;
let type;
let users = [];
function User({
  fname = 'Default',
  lname = 'Default',
  username = 'Default',
  password = 'Default',
  email = 'Default',
  address = 'Default',
  phone = 'Default',
  type = 'AdminDefault',
  id = '0'
}) {
  this.fname = fname;
  this.lname = lname;
  this.username = username;
  this.password = password;
  this.email = email;
  this.address = address;
  this.phone = phone;
  this.type = type;
  this.id = id;
}
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#submit').addEventListener('click', loadData);
  $('.sort').click(function() {
    sortData($(this).val());
  });

  document.querySelector('.tbody').addEventListener('click', removeData);
  document.querySelector('#user-list').addEventListener('change', function() {
    let selectValue = this.value;

    if (selectValue == 'All') {
      showUserDetail(users);
    } else {
      var newUser = [];
      users.forEach(function(val) {
        if (selectValue == val.username) {
          newUser.push(val);
        }
      });

      showUserDetail(newUser);
    }
  });
});

function loadData(e) {
  event.preventDefault();
  getUI();
  let user = new User({
    fname: fname.value || 'Default',
    lname: lname.value || 'Default',
    username: username.value || 'Default',
    password: password.value || 'Default',
    email: email.value || 'Default',
    address: address.value || 'Default',
    phone: phone.value || 'Default',
    type: type.value || 'Default',
    id: users.length + 1
  });
  users.push(user);
  addUserToList();
}

function getUI() {
  fname = document.querySelector('#fname');
  lname = document.querySelector('#lname');
  username = document.querySelector('#username');
  password = document.querySelector('#password');
  email = document.querySelector('#email');
  address = document.querySelector('#address');
  phone = document.querySelector('#phone');
  type = document.querySelector('#auth');
}

function addUserToList() {
  populatedSelectBox(users);
  populateTable(users);
}

function showUserDetail(userData) {
  let dBox = document.querySelector('.display-data');
  dBox.innerHTML = '';
  if (userData.length == 0) {
    let dBox = document.querySelector('.display-data');
    dBox.innerHTML = '';
    let errMsg = document.createElement('p');
    errMsg.innerHTML = 'No Data Present in User First Add Data';
    errMsg.classList.add('text-danger');
    dBox.appendChild(errMsg);
  } else {
    userData.forEach(function(user) {
      let divs = `
      <ul class='list-group'>
       <li class='list-group-item'>Hello ${user.fname} ${user.lname} , <span class='text-danger'> welcome back</span> </li>
       <li class='list-group-item'> Registered email is :  ${user.email}</li>
       <li class='list-group-item'> Address :  ${user.address}</li>
       <li class='list-group-item'> Phone no :  ${user.phone}</li>
      </ul>
      `;
      dBox.innerHTML += divs;
    });
  }
}

function sortObject(sortOrder) {
  console.log(sortOrder);
  if (sortOrder == 'Asc') {
    users.sort(function(a, b) {
      const bandA = a.username.toUpperCase();
      const userB = b.username.toUpperCase();

      let compare = 0;
      if (bandA > userB) {
        compare = 1;
      } else if (bandA < userB) {
        compare = -1;
      }
      return compare;
    });
  } else if (sortOrder == 'Desc') {
    users.sort(function(a, b) {
      const bandA = a.username.toUpperCase();
      const userB = b.username.toUpperCase();

      let compare = 0;
      if (bandA < userB) {
        compare = 1;
      } else if (bandA > userB) {
        compare = -1;
      }
      return compare;
    });
  }
  return users;
}

function sortData(order) {
  if (order == 'Asc') {
    let sortedObj = sortObject(order);
    console.log(sortedObj);
    populateTable(sortedObj);
  } else if (order == 'Desc') {
    let sortedObj = sortObject(order);
    console.log(sortedObj);
    populateTable(sortedObj);
  } else if (order == 'Admin') {
    let sortedObj = [];
    users.forEach(function(val) {
      if ('Admin' == val.type) {
        sortedObj.push(val);
      }
    });

    populateTable(sortedObj);
  } else if (order == 'User') {
    let sortedObj = [];
    users.forEach(function(val) {
      if ('User' == val.type) {
        sortedObj.push(val);
      }
    });

    populateTable(sortedObj);
  }
}

function populateTable(sortedObj) {
  let table = document.querySelector('.tbody');
  table.innerHTML = '';
  sortedObj.forEach(function(user, index) {
    let trow = document.createElement('tr');
    let tds = `
      <td>${user.fname} ${user.lname}</td>
      <td>${user.email}</td>
      <td>${user.address}</td>
      <td>${user.phone}</td>
      <td><button class="btn btn-danger" value=${user.id}><i class="fas fa-times"></i></button></td>
      `;
    trow.innerHTML = tds;
    table.appendChild(trow);
  });
}

function populatedSelectBox(object) {
  let userBox = document.querySelector('#user-list');
  userBox.innerHTML = '';
  let option = document.createElement('option');
  option.value = 'All';
  option.innerHTML = 'All';
  userBox.append(option);
  object.forEach(function(user) {
    let option = document.createElement('option');
    option.value = user.username;
    option.innerHTML = user.username;
    userBox.append(option);
  });
}

function removeData(e) {
  if (
    e.target.parentElement.parentElement.parentElement.parentElement.classList.contains(
      'tbody'
    )
  ) {
    let target = e.target.parentElement.value;
    console.log(target);
    users.forEach(function(user) {
      if (user.id == target) {
        users.pop();
      }
    });
    populateTable(users);
    populatedSelectBox(users);
  }
}
