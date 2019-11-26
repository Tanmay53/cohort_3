var customerArr = [];
var addCustomerBtn = document.getElementById('addCustomer');
var div = document.getElementById('displayContainer');
var printCustomersBtn = document.getElementById('printCustomers');
printCustomersBtn.addEventListener('click',printCustomers);
addCustomerBtn.addEventListener('click',addCustomer);

function Customers(fName, lName, dob, balance, acctNo, acctHolders) {
    this.firstName = fName;
    this.lastName = lName;
    this.dateOfBirth = dob;
    this.balance = balance;
    this.accountNumber = acctNo;
    this.sharedAccountHolders = acctHolders.split(',').map(function (ele) {
        return ele.trim();
    });
    this.displayDetails = function () {
        var str = '';
        str += ("First Name: " + this.firstName + '\n');
        str += ("Last Name: " + this.lastName + '\n');
        str += ("Date of Birth: " + this.dateOfBirth + '\n');
        str += ("Balance: " + this.balance + '\n');
        str += ("Account Number: " + this.accountNumber + '\n');
        str += ("Share Account Holders: " + this.sharedAccountHolders.join(', '));
        return str;
    }
}

function addCustomer() {
    var fName = document.getElementById('fname').value;
    var lName = document.getElementById('lname').value;
    var dob = document.getElementById('dob').value;
    var balance = document.getElementById('balance').value;
    var acctNo = document.getElementById('accountnumber').value;
    var acctHolders = document.getElementById('acctholders').value;
    var obj = new Customers(fName, lName, dob, balance, acctNo, acctHolders);
    customerArr.push(obj);
    console.log(customerArr);
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('dob').value = '';
    document.getElementById('balance').value = '';
    document.getElementById('accountnumber').value = '';
    document.getElementById('acctholders').value = '';
}

function printCustomers() {
    div.innerHTML = '';
    for (var i = 0; i < customerArr.length; i++) {
        console.log(customerArr[i]);
        var p = document.createElement('p');
        p.innerText = customerArr[i].displayDetails();
        div.append(p);
    }
}