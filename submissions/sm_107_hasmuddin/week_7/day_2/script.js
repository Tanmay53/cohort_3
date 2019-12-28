let fName;
let lName;
let uName;
let pswd;
let email;
let addrs;
let phoneNo;
let userType;

function User({
  firstName = "Default",
  lastName = "default",
  userName = "default",
  password = "default",
  emailAdd = "default",
  address = "Default",
  mobile = "Default",
  userT = "Default"
}) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.userName = userName;
  this.password = password;
  this.emailAdd = emailAdd;
  this.address = address;
  this.mobile = mobile;
  this.userT = userT;
}

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", addData);
var users = [];
function addData(e) {
  e.preventDefault();
  getData();
  let user = new User({
    firstName: fName || "Default",
    lastName: lName || "Default",
    userName: uName || "Default",
    password: pswd || "Default",
    emailAdd: email || "Default",
    address: addrs || "Default",
    mobile: phoneNo || "Default",
    userT: userType || "Default"
  });
  users.push(user);
  selectUser();
  tableData();
}

function getData() {
  fName = $("input:nth-of-type(1)").val();
  lName = $("input:nth-of-type(2)").val();
  uName = $("input:nth-of-type(3)").val();
  pswd = $("input:nth-of-type(4)").val();
  email = $("input:nth-of-type(5)").val();
  addrs = $("input:nth-of-type(6)").val();
  phoneNo = $("input:nth-of-type(7)").val();
  userType = $("select:nth-of-type(1)").val();
}

//   listing in greeting function;
var usrlst = document.getElementById("userlist");
usrlst.addEventListener("change", displayProfile);
function displayProfile() {
  let nameValue = $("#userlist").val();
  for (var m = 0; m < users.length; m++) {
    if (nameValue == users[m].firstName) {
      var textdata = document.getElementById("userinfo");
      textdata.innerHTML = `<div class="row col-6 mx-5 border">
                                    Welcome, ${users[m].userName} <br/>
                                    Name : ${users[m].firstName +
                                      " " +
                                      users[m].lastName} <br/>
                                    Registered Email : ${users[m].emailAdd}
                                    </div>    `;
    }
  }
}
//sorting
let userSort = document.getElementById("userSort");
userSort.addEventListener("change", sortByUser);
function sortByUser() {
  // ascending order sorting
  if ($("#userSort").val() == "asc") {
    function objSorting(a, b) {
      const userA = a.userName;
      const userB = b.userName;

      let comparison = 0;
      if (userA > userB) {
        comparison = 1;
      } else if (userA < userB) {
        comparison = -1;
      }
      return comparison;
    }
    users.sort(objSorting);
    tableData();
  }

  // descending order sort
  else if ($("#userSort").val() == "desc") {
    function objSorting(a, b) {
      const userA = a.userName;
      const userB = b.userName;

      let comparison = 0;
      if (userA > userB) {
        comparison = -1;
      } else if (userA < userB) {
        comparison = 1;
      }
      return comparison;
    }
    users.sort(objSorting);
    tableData();
  }
}

// sort by usertype list
let usertype = document.getElementById("usertype");
usertype.addEventListener("change", userTypeList);
function userTypeList() {
  if ($("#usertype").val() == "all") {
    users = users;
    tableData();
  } else if ($("#usertype").val() == "admin") {
    users = users.filter(function(ele) {
      if (ele.userT == "admin") {
        return ele;
      }
    });
    tableData();
  } else if ($("#usertype").val() == "user") {
    users = users.filter(function(ele) {
      if (ele.userT == "user") {
        return ele;
      }
    });
    tableData();
  }
}

//   pushing userName in Selection

function selectUser() {
  $("#userlist").empty();
  var userL = document.getElementById("userlist");
  if (users.length != 0) {
    for (var i = 0; i < users.length; i++) {
      var opt = document.createElement("option");
      opt.setAttribute("value", users[i].firstName);
      opt.textContent = users[i].firstName;
      userL.appendChild(opt);
    }
  }
}

//   table row
function tableData() {
  let table = document.getElementById("table");
  var head = document.getElementById("headTable");
  $(table).empty();
  table.appendChild(head);
  for (var i = 0; i < users.length; i++) {
    var tr = document.createElement("tr");
    var count = 0;
    tr.setAttribute("class", "rmv" + count);
    td1 = document.createElement("td");
    td1.textContent = users[i].firstName;

    td2 = document.createElement("td");
    td2.textContent = users[i].lastName;

    td3 = document.createElement("td");
    td3.textContent = users[i].userName;

    td5 = document.createElement("td");
    td5.textContent = users[i].emailAdd;

    td6 = document.createElement("td");
    td6.textContent = users[i].address;

    td8 = document.createElement("td");
    td8.textContent = users[i].userT;

    td9 = document.createElement("td");
    td9.textContent = "X";
    td9.setAttribute("class", "cross");
    var cols = [td1, td2, td3, td5, td6, td8, td9];
    for (var j = 0; j < cols.length; j++) {
      tr.appendChild(cols[j]);
    }
    table.appendChild(tr);
  }
}
