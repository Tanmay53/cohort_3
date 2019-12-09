userDB = [];

function createUser() {
  var inputs = document.getElementsByClassName("inputs");

  var type;
  if (inputs[7].checked == true) {
    type = "user";
  } else {
    type = "admin";
  }

  var user = new Users(
    inputs[0].value,
    inputs[1].value,
    inputs[2].value,
    inputs[3].value,
    inputs[4].value,
    inputs[5].value,
    inputs[6].value,
    type
  );

  if (validateInput(inputs[2].value, inputs[3].value, inputs[4].value)) {
    $("input").val("");
    userDB.push(user);
  } else {
  }

  console.clear();
  console.table(userDB);

  $("#userTypeSelector").val("");
  $("#sortSelector").val("");
  populateUsersSelector(userDB);
}

function Users(
  firstname = null,
  lastname = null,
  username,
  password,
  email,
  address = null,
  phone = null,
  type
) {
  this.fname = firstname;
  this.lname = lastname;
  this.uname = username;
  this.password = password;
  this.email = email;
  this.address = address;
  this.phone = phone;
  this.type = type;
}

function validateInput(name, password, email) {
  if (name == "" || password == "" || email == "") {
    alert("Username, password or email cannot be empty!");
    return false;
  }
  for (var i = 0; i < userDB.length; i++) {
    if (userDB[i].uname == name || userDB[i].email == email) {
      alert("Username and email should be unique!");
      return false;
    }
  }
  return true;
}

function populateUsersSelector(userDB) {
  var userSelector = document.getElementById("userSelector");
  userSelector.innerHTML = "";

  $("#userDataDiv").empty();
  $(".table").empty();
  if (userDB.length == 0) {
    $("#userTypeSelector").val("");
    $("#sortSelector").val("");
  }

  var option = document.createElement("option");
  option.textContent = "";
  userSelector.appendChild(option);

  userDB.forEach(function(e) {
    let option = document.createElement("option");
    option.setAttribute("class", "bg-dark text-light");
    option.textContent = e.uname;
    userSelector.appendChild(option);
  });
}

function displayUserDetails(value) {
  var userDataDiv = document.getElementById("userDataDiv");
  userDataDiv.innerHTML = "";

  if (value == "") {
    userDataDiv.innerHTML = "";
  } else {
    let user = userDB.filter(function(user) {
      return user.uname == value;
    });

    var para = document.createElement("p");
    para.setAttribute("style", "white-space:pre-line");

    if (user[0].type == "user") {
      para.textContent =
        "Hello, " +
        value.toUpperCase() +
        ". Welcome Back!\nYour registered email id with us is " +
        userDB.filter(function(user) {
          return user.uname == value;
        })[0].email;
    } else if (user[0].type == "admin") {
      para.textContent =
        "Hello, " +
        value.toUpperCase() +
        ". Welcome Back Admin!\nAll systems normal. Remember - With great power comes great responsibility. Use your powers well.";
    }
    userDataDiv.appendChild(para);
  }
}

function displayTableType(value) {
  var table = document.getElementById("userTable");
  table.innerHTML = "";

  let thead = document.createElement("tr");
  table.appendChild(thead);

  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");
  let th4 = document.createElement("th");
  let th5 = document.createElement("th");
  let th6 = document.createElement("th");
  let th7 = document.createElement("th");
  let th8 = document.createElement("th");

  th1.textContent = "Firstname";
  th2.textContent = "Lastname";
  th3.textContent = "Username";
  th4.textContent = "Email";
  th5.textContent = "Address";
  th6.textContent = "Phone";
  th7.textContent = "Type";
  th8.textContent = "Delete?";

  thead.appendChild(th1);
  thead.appendChild(th2);
  thead.appendChild(th3);
  thead.appendChild(th4);
  thead.appendChild(th5);
  thead.appendChild(th6);
  thead.appendChild(th7);
  thead.appendChild(th8);

  if (value == "") {
  } else if (value == "all") {
    for (let i = 0; i < userDB.length; i++) {
      let row = document.createElement("tr");
      table.appendChild(row);
      for (key in userDB[i]) {
        if (key != "password") {
          var tdata = document.createElement("td");
          tdata.textContent = userDB[i][key];
          row.appendChild(tdata);
        }
      }
      var delButtonTdata = document.createElement("td");
      delButtonTdata.setAttribute("class", "align-center");
      var delButton = document.createElement("button");
      delButton.textContent = "Delete";
      delButton.setAttribute("class", "bg-dark text-light border rounded");
      delButton.addEventListener("click", function() {
        deleteUser(userDB[i].uname);
      });
      delButtonTdata.appendChild(delButton);
      row.appendChild(delButtonTdata);
    }
  } else if (value == "user") {
    var users = userDB.filter(function(user) {
      return user.type == "user";
    });

    for (let i = 0; i < users.length; i++) {
      let row = document.createElement("tr");
      table.appendChild(row);
      for (key in users[i]) {
        if (key != "password") {
          var tdata = document.createElement("td");
          tdata.textContent = users[i][key];
          row.appendChild(tdata);
        }
      }
      var delButtonTdata = document.createElement("td");
      delButtonTdata.setAttribute("class", "align-center");
      var delButton = document.createElement("button");
      delButton.textContent = "Delete";
      delButton.setAttribute("class", "bg-dark text-light border rounded");
      delButton.addEventListener("click", function() {
        deleteUser(userDB[i].uname);
      });
      delButtonTdata.appendChild(delButton);
      row.appendChild(delButtonTdata);
    }
  } else if (value == "admin") {
    var users = userDB.filter(function(user) {
      return user.type == "admin";
    });

    for (let i = 0; i < users.length; i++) {
      let row = document.createElement("tr");
      table.appendChild(row);
      for (key in users[i]) {
        if (key != "password") {
          var tdata = document.createElement("td");
          tdata.textContent = users[i][key];
          row.appendChild(tdata);
        }
      }
      var delButtonTdata = document.createElement("td");
      delButtonTdata.setAttribute("class", "align-center");
      var delButton = document.createElement("button");
      delButton.textContent = "Delete";
      delButton.setAttribute("class", "bg-dark text-light border rounded");
      delButton.addEventListener("click", function() {
        deleteUser(userDB[i].uname);
      });
      delButtonTdata.appendChild(delButton);
      row.appendChild(delButtonTdata);
    }
  }
}

function deleteUser(userName) {
  userDB = userDB.filter(function(user) {
    return user.uname != userName;
  });
  var userType = $("#userTypeSelector").val();

  if (userType == "") {
    userType = "all";
  }

  populateUsersSelector(userDB);
  displayTableType(userType);
}

function displayTableSort(value) {
  var userType = $("#userTypeSelector").val();
  if (userType == "") {
    userType = "all";
  }

  if (value == "") {
  } else if (value == "asc") {
    userDB.sort(function(a, b) {
      if (a.uname > b.uname) {
        return 1;
      } else if (a.uname < b.uname) {
        return -1;
      }
      return 0;
    });
  } else if (value == "desc") {
    userDB.sort(function(a, b) {
      if (a.uname < b.uname) {
        return 1;
      } else if (a.uname > b.uname) {
        return -1;
      }
      return 0;
    });
  }
  displayTableType(userType);
}
