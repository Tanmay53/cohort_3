var users = [];
$("#submit").click(function() {
  const fname = $("#fname").val();
  const lname = $("#lname").val();
  const username = $("#username").val();
  const pass = $("#pass").val();
  const email = $("#email").val();
  const add = $("#add").val();
  const phn = $("#phn").val();
  const type = $("#type").val();

  function personInfo(
    fname = "Name",
    lname = "Also Name",
    username,
    pass,
    email,
    address = "some random address",
    phone = "1111111111",
    type
  ) {
    this.FirstName = fname;
    this.LastName = lname;
    this.username = username;
    this.password = pass;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.type = type;
  }
  var user1 = new personInfo(
    fname,
    lname,
    username,
    pass,
    email,
    add,
    phn,
    type
  );
  $("#users").append(
    `<option value="${user1.username}">${user1.username}</option>`
  );
  users.push(user1);

  $("#fname").val("");
  $("#lname").val("");
  $("#username").val("");
  $("#pass").val("");
  $("#email").val("");
  $("#add").val("");
  $("#phn").val("");
  $("#type").val("");
});

$("#users").change(function() {
  $("#tbody").empty();
  $("p").remove();
  var checkUser = $("#users").val();
  users.forEach(function(ele) {
    if (ele.username == checkUser) {
      $("#tbody").append(
        createTable(ele.username, ele.password, ele.email, ele.address)
      );
      if (ele.type == "admin") {
        $("#showInfo").append(
          `<p class = "lead text-success">Welcome Admin</p>`
        );
      } else {
        $("#showInfo").append(`<p class = "lead text-danger">Welcome User</p>`);
      }
    }
  });
});
function createTable(username, pass, email, add) {
  let table = "";
  table = `<tr>
    <th scope="col">${username}</th>
    <th scope="col">${pass}</th>
    <th scope="col">${email}</th>
    <th scope="col">${add}</th>
  </tr>`;
  return table;
}
$("#showAll").click(function() {
  users.forEach(function(ele) {
    $("#search").append(
      createNewTable(
        ele.FirstName,
        ele.username,
        ele.email,
        ele.address,
        ele.type
      )
    );
  });
});

function createNewTable(name, user, email, address, type) {
  let table = "";
  table = `<tr>
  <th scope="col">${name}</th>
  <th scope="col">${user}</th>
  <th scope="col">${email}</th>
  <th scope="col">${address}</th>
  <th scope="col">${type}</th>
  <th scope="col"><button class ="btn" onclick="deleteRow()" ><i class="text-light far fa-times-circle fa-2x"></i></button></th>
    </tr>`;
  // onclick="deleteRow('${user}')"
  return table;
}

// Sort
$("#sort").change(function() {
  $("#search").empty();
  var value = $("#sort").val();
  if (value == "asc") {
    var tempArr = users;
    tempArr.sort(function(a, b) {
      if (a.username < b.username) {
        return -1;
      }
      if (a.username > b.username) {
        return 1;
      } else {
        return 0;
      }
    });
    console.log(tempArr);
    tempArr.forEach(function(ele) {
      $("#search").append(
        createNewTable(
          ele.FirstName,
          ele.username,
          ele.email,
          ele.address,
          ele.type
        )
      );
    });
  }
  if (value == "desc") {
    var tempArr = users;
    tempArr.sort(function(a, b) {
      if (a.username > b.username) {
        return -1;
      }
      if (a.username < b.username) {
        return 1;
      } else {
        return 0;
      }
    });
    console.log(tempArr);
    tempArr.forEach(function(ele) {
      $("#search").append(
        createNewTable(
          ele.FirstName,
          ele.username,
          ele.email,
          ele.address,
          ele.type
        )
      );
    });
  }
});

// delete Row
function deleteRow() {
  var target = event.target;
  var parent = target.parentElement;
  var baap = parent.parentElement;
  var baapkabaap = baap.parentElement;
  var father = baapkabaap.parentElement;

  $(father).remove();
  console.log(parent);
}

$("#filter").change(function() {
  $("#search").empty();
  var toTemp = [];
  toTemp = users;
  var toFilter = $("#filter").val();
  if (toFilter == "admin") {
    toTemp.forEach(function(ele) {
      if (ele.type == "admin")
        $("#search").append(
          createNewTable(
            ele.FirstName,
            ele.username,
            ele.email,
            ele.address,
            ele.type
          )
        );
    });
  } else if (toFilter == "user") {
    toTemp.forEach(function(ele) {
      if (ele.type == "user")
        $("#search").append(
          createNewTable(
            ele.FirstName,
            ele.username,
            ele.email,
            ele.address,
            ele.type
          )
        );
    });
  } else {
    toTemp.forEach(function(ele) {
      $("#search").append(
        createNewTable(
          ele.FirstName,
          ele.username,
          ele.email,
          ele.address,
          ele.type
        )
      );
    });
  }
});
