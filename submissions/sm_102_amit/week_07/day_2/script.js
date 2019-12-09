// adding event listener to button
document.getElementById("saveUser").addEventListener("click", () => {
  createUser();
});
document.getElementById("selectUser").addEventListener("change", () => {
  getUserInfo();
});
document.getElementById("sortAsc").addEventListener("click", () => {
  sort("asc");
});
document.getElementById("sortDsc").addEventListener("click", () => {
  sort("dsc");
});
document.getElementById("filterUser").addEventListener("click", () => {
  filter("user");
});
document.getElementById("filterAdmin").addEventListener("click", () => {
  filter("admin");
});

// an empty array to store all users
let userArr = [];

// user constructor
function User({
  firstName,
  lastName,
  username,
  password,
  email,
  phone,
  address,
  usertype
}) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.username = username;
  this.password = password;
  this.email = email;
  this.phone = phone;
  this.address = address;
  this.usertype = usertype;
}

// functon to save user to an array
function createUser() {
  event.preventDefault();
  // get value of each input
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let usertype = document.getElementById("usertype").value;

  // create user object
  let user = new User({
    firstName,
    lastName,
    username,
    password,
    email,
    phone,
    address,
    usertype
  });

  userArr.push(user);
  addUserToDropdown(userArr);
  addUserToTable(userArr);
}

// function to create select-box
function addUserToDropdown(users) {
  let selectBox = document.getElementById("users");
  selectBox.innerHTML = "";
  let options = document.createElement("option");
  options.setAttribute("value", "");
  options.innerText = "== Select one User ==";
  selectBox.appendChild(options);
  users.forEach(element => {
    let options = document.createElement("option");
    options.setAttribute("value", element.username);
    options.innerText = element.username;
    selectBox.appendChild(options);
  });
}

// functio to add user to table
function addUserToTable(users) {
  let tableBody = document.getElementById("userTable");
  tableBody.innerHTML = "";
  users.forEach(element => {
    let row = addRow(element);
    tableBody.appendChild(row);
  });
}

// function to create user row
function addRow(user) {
  var row = document.createElement("tr");
  row.innerHTML =
    "<td>" +
    user.firstName +
    "</td>" +
    "<td>" +
    user.lastName +
    "</td>" +
    "<td>" +
    user.username +
    "</td>" +
    "<td>" +
    user.password +
    "</td>" +
    "<td>" +
    user.email +
    "</td>" +
    "<td>" +
    user.phone +
    "</td>" +
    "<td>" +
    user.address +
    "</td>" +
    "<td>" +
    user.usertype +
    "</td>" +
    "<td><button class='btn btn-danger' onclick='removeItem()' value='" +
    user.username +
    "'>Remove</button></td>";
  return row;
}
// function to get user info

function getUserInfo() {
  var infoBox = document.getElementById("userInfo");
  infoBox.innerHTML = "";
  let selectedUser = event.target.value;
  userArr.forEach(element => {
    if (element.username == selectedUser) {
      var div = document.createElement("div");
      div.setAttribute(
        "class",
        "alert alert-warning alert-dismissible fade show"
      );
      div.setAttribute("role", "alert");
      div.innerText =
        "Hello " +
        element.firstName +
        " " +
        element.lastName +
        ". Welcome back! Your Registered email is :  " +
        element.email;
    }
    infoBox.appendChild(div);
  });
}

// fuction to remove a item
function removeItem() {
  var username = event.target.value;
  userArr = userArr.filter(element => element.username != username);
  addUserToDropdown(userArr);
  addUserToTable(userArr);
}

// function to sort the user table
function sort(input) {
  var sortedArr = [];
  switch (input) {
    case "asc": {
      sortedArr = userArr.sort((a, b) => {
        return a.username > b.username ? 1 : -1;
      });
      break;
    }

    case "dsc": {
      sortedArr = userArr.sort((a, b) => {
        return b.username > a.username ? 1 : -1;
      });
      break;
    }
  }
  addUserToTable(sortedArr);
}

// function to filter the user table
function filter(input) {
  let filterArr = [];
  switch (input) {
    case "admin": {
      filterArr = userArr.filter(element => {
        return element.usertype === "admin";
      });
      break;
    }
    case "user": {
      filterArr = userArr.filter(element => {
        return element.usertype === "user";
      });
      break;
    }
  }
  addUserToDropdown(filterArr);
  addUserToTable(filterArr);
}
