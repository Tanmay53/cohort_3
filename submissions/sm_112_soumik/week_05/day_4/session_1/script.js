var customerArr = [];
function createPerson() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var dob = document.getElementById("dob").value;
  var balance = document.getElementById("balance").value;
  var acc = document.getElementById("acc").value;
  var sharedAcc = document.getElementById("sharedAcc").value;
  function customer(name1, lname, dob, balance, acc, sharedAcc) {
    this.First_name = name1;
    this.Last_name = lname;
    this.Date_of_Birth = dob;
    this.Balance = balance;
    this.Account_number = acc;
    this.Shared_Account_holder_Names = sharedAcc.split(" ");
    this.display_details = function() {
      var str = "";

      for (key in this) {
        str += key + ":" + this[key] + "\n";
        if (key == "Shared_Account_holder_Names") break;
      }
      return str;
    };
  }
  var New_customer = new customer(fname, lname, dob, balance, acc, sharedAcc);
  customerArr.push(New_customer);
  console.log(New_customer.display_details());
  console.log(customerArr);
}
var btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", createPerson);
