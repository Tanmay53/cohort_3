function registerUser() {
  event.preventDefault();
  var username = $("#dataUsername").val();
  var email = $("#dataEmail").val();
  var password = $("#dataPassword").val();
  var type = $("#dataSelectType").val();
  var fName = $("#dataFname").val();
  var lName = $("#dataLname").val();
  var address = $("#dataAddress").val();

  function User(
    username,
    email,
    password,
    type,
    fName = null,
    lName = null,
    address = null
  ) {
    (this.username = username),
      (this.email = email),
      (this.password = password),
      (this.type = type),
      (this.fname = fName),
      (this.lname = lName),
      (this.address = address);
  }

  var user = new User(username, email, password, type, fName, lName, address);
  userArr.push(user);
  return userArr;
}

var userArr = [];
$("#btnSubmit").on("click", function() {
  $("#dataSelectUser").empty();
  registerUser();
  appendUser();
});
console.log(userArr);

// appending user to the display area//
function appendUser() {
  //   var selectUser = $("#dataSelectUser")
  userArr.forEach(function(ele) {
    $("#dataSelectUser").append(
      `<option value = ${ele.username}>${ele.username}</option>`
    );
  });
}

var para = document.getElementById("displayArea");
// selection of a particular person //
$("#dataSelectUser").change(function() {
  var selectedUser = $("#dataSelectUser").val();
  userArr.forEach(function(ele) {
    if (ele.username === selectedUser) {
      if (ele.type === "admin") {
        para.innerHTML = `<div class = "display-4" style = "background : pink" >
                                <div> Hello ${ele.fname},<br> welcome back </div>
                                <div> Registered email is: ${ele.email}</div>
                              </div>`;
      } else if (ele.type === "user") {
        para.innerHTML = `<div class = "display-4" style = "background : lightblue" >
                                 <div> Hello ${ele.fname},<br> welcome back </div>
                                 <div> Registered email is: ${ele.email}</div>
                                </div>`;
      }
    }
  });
});

// filter between all/user/admin //
$("#dataFilter").change(function() {
  let table = document.createElement("table");
  table.classList.add("table", "table-striped");
  let thead = document.createElement("thead");
  thead.classList.add("thead-dark");
  let tbody = document.createElement("tbody");

  if (thead.innerHTML == "") {
    thead.innerHTML = `<tr>
                            <th scope = "col">Username</th>
                            <th scope = "col">First Name</th> 
                            <th scope = "col">Last Nmae</th>
                            <th scope = "col">Email</th>
                            <th scope = "col">Type</th>
                         </tr>`;
  }
  table.append(thead);
  $("#displayArea").empty();
  var filterKey = $("#dataFilter").val();

  if (filterKey === "all") {
    userArr.forEach(function(ele) {
      tbody.innerHTML += `<tr>
                                      <td class = "mr-4 inline-block">${ele.username}</td>
                                      <td class = "mr-4 inline-block">${ele.fname}</td>
                                      <td class = "mr-4 inline-block">${ele.lname}</td>
                                      <td class = "mr-4 inline-block">${ele.email}</td>
                                      <td class = "mr-4 inline-block">${ele.type}</td>
                                  </tr>`;
    });
  } else if (filterKey === "user") {
    userArr.forEach(function(ele) {
      if (ele.type === "user") {
        tbody.innerHTML += `<tr>
                                        <td class = "mr-4 inline-block">${ele.username}</td>
                                        <td class = "mr-4 inline-block">${ele.fname}</td>
                                        <td class = "mr-4 inline-block">${ele.lname}</td>
                                        <td class = "mr-4 inline-block">${ele.email}</td>
                                        <td class = "mr-4 inline-block">${ele.type}</td>
                                    </tr>`;
      }
    });
  } else if (filterKey === "admin") {
    userArr.forEach(function(ele) {
      if (ele.type === "admin") {
        tbody.innerHTML += `<tr>
                                        <td class = "mr-4 inline-block">${ele.username}</td>
                                        <td class = "mr-4 inline-block">${ele.fname}</td>
                                        <td class = "mr-4 inline-block">${ele.lname}</td>
                                        <td class = "mr-4 inline-block">${ele.email}</td>
                                        <td class = "mr-4 inline-block">${ele.type}</td>
                                    </tr>`;
      }
    });
  }
  table.append(tbody);
  $("#displayArea").append(table);
});

// sorting //
$("#dataSort").change(function() {
  var sort = $("#dataSort").val();
  if (sort === "ascending") {
    userArr.sort(function(a, b) {
      var nameA = a.fname.toUpperCase(); // ignore upper and lowercase
      var nameB = b.fname.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      } 
      else if (nameA > nameB) {
        return 1;
      }
       else if (nameA === nameB)
        // names must be equal
        return 0;
    });

    let table = document.createElement("table");
    table.classList.add("table", "table-striped");
    let thead = document.createElement("thead");
    thead.classList.add("thead-dark");
    let tbody = document.createElement("tbody");

    if (thead.innerHTML == "") {
      thead.innerHTML = `<tr>
                                   <th scope = "col">Username</th>
                                   <th scope = "col">First Name</th> 
                                   <th scope = "col">Last Nmae</th>
                                   <th scope = "col">Email</th>
                                   <th scope = "col">Type</th>
                                   <th scope = "col">Delete</th>
                                </tr>`;
    }
    table.append(thead);
    $("#displayArea").empty();
    userArr.forEach(function(ele) {
      tbody.innerHTML += `<tr>
                                    <td class = "mr-4 inline-block">${ele.username}</td>
                                    <td class = "mr-4 inline-block">${ele.fname}</td>
                                    <td class = "mr-4 inline-block">${ele.lname}</td>
                                    <td class = "mr-4 inline-block">${ele.email}</td>
                                    <td class = "mr-4 inline-block">${ele.type}</td>
                                    <td class = "mr-4 inline-block"> <button onclick = "btnDelete()" type="button" class="btn btn-secondary">delete</button></td>
                               </tr>`;
    });
    table.append(tbody);
    $("#displayArea").append(table);
  } 
  else if (sort === "descending") {
    userArr.sort(function(a, b) {
      var nameA = a.fname.toUpperCase(); // ignore upper and lowercase
      var nameB = b.fname.toUpperCase(); // ignore upper and lowercase
      if (nameA > nameB) {
        return -1;
      } else if (nameA < nameB) {
        return 1;
      } else if (nameA === nameB)
        // names must be equal
        return 0;
    });

    let table = document.createElement("table");
    table.classList.add("table", "table-striped");
    let thead = document.createElement("thead");
    thead.classList.add("thead-dark");
    let tbody = document.createElement("tbody");

    if (thead.innerHTML == "") {
      thead.innerHTML = `<tr>
                                   <th scope = "col">Username</th>
                                   <th scope = "col">First Name</th> 
                                   <th scope = "col">Last Nmae</th>
                                   <th scope = "col">Email</th>
                                   <th scope = "col">Type</th>
                                   <th scope = "col">Delete</th>
                                </tr>`;
    }
    table.append(thead);
    $("#displayArea").empty();
    userArr.forEach(function(ele) {
      tbody.innerHTML += `<tr>
                                    <td class = "mr-4 inline-block">${ele.username}</td>
                                    <td class = "mr-4 inline-block">${ele.fname}</td>
                                    <td class = "mr-4 inline-block">${ele.lname}</td>
                                    <td class = "mr-4 inline-block">${ele.email}</td>
                                    <td class = "mr-4 inline-block">${ele.type}</td>
                                    <td class = "mr-4 inline-block"> <button onclick = "btnDelete()" type="button" class="btn btn-secondary">delete</button></td>
                               </tr>`;
    });
    table.append(tbody);
    $("#displayArea").append(table);

  }
});

function btnDelete(){
    
    var target = event.target;
    var parentTD = target.parentElement;
    var parentTR = parentTD.parentElement;
    parentTR.remove();
}