var customerArr = [];
var btn_submit = document.getElementById("btn_submit");
btn_submit.addEventListener("click", createIdentity);
var btn_show = document.getElementById("btn_show");
btn_show.addEventListener("click", showData);
var tableBody = document.getElementById("tBody");
function CreateCustomer(fname, lname, dob, balance, accNum, accName) {
  this.first_name = fname;
  this.last_name = lname;
  this.date_of_birth = dob;
  this.balane = balance;
  this.acc_Number = accNum;
  this.shared_account_Name = accName.split(" ");
}
function createIdentity() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var dob = document.getElementById("dob").value;
  var balance = document.getElementById("balance").value;
  var accNum = document.getElementById("accNum").value;
  var accName = document.getElementById("accName").value;

  var newCustomer = new CreateCustomer(
    fname,
    lname,
    dob,
    balance,
    accNum,
    accName
  );
  customerArr.push(newCustomer);
  //

  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("balance").value = "";
  document.getElementById("accNum").value = "";
  document.getElementById("accName").value = "";
  console.log(customerArr);
}
function showData() {
  customerArr.forEach(function(ele) {
    var tr = document.createElement("tr");
    for (key in ele) {
      var td = document.createElement("td");
      td.innerText = ele[key];
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  });
}
