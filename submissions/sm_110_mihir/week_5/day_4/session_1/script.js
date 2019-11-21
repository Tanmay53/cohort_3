var customerArr = [];
function Customers(
    fname,
    lname,
    dob,
    balance,
    accountNumber,
    sharedAccountHolders
) {
    this.firstname = fname;
    this.lastName = lname;
    this.dateOfBirth = dob;
    this.balance = balance;
    this.accountNumber = accountNumber;
    sharedAccountHolders = sharedAccountHolders.split(",");
    this.sharedAccountHolders = sharedAccountHolders;
    this.displayDetails = function() {
        var str = "";
        str +=
            "First Name: " +
            this.firstname +
            "\n" +
            "Last Name: " +
            this.lastName +
            "\n" +
            "Date of Birth: " +
            this.dateOfBirth +
            "\n" +
            "balance: " +
            this.balance +
            "\n" +
            "Account Number: " +
            this.accountNumber +
            "\n" +
            "Shared Account holders: " +
            this.sharedAccountHolders.join(", ");
        console.log("from constructor:", str);
        return str;
    };
}

function add() {
    console.log("add method");
    var fname = document.getElementById("fName").value;
    var lname = document.getElementById("lName").value;
    var dob = document.getElementById("dob").value;
    var balance = document.getElementById("balance").value;
    var accNum = document.getElementById("accountNumber").value;
    var sharedAcc = document.getElementById("sharedAccountHolders").value;

    var customer = new Customers(fname, lname, dob, balance, accNum, sharedAcc);
    customerArr.push(customer);
    console.log(customerArr);
}

function print() {
    console.log(customerArr);
    var cont = document.getElementById("displayContainer");
    cont.innerHTML = "";

    customerArr.forEach(function(element) {
        var result = element.displayDetails();
        var p = document.createElement("p");
        p.innerText = result;

        cont.appendChild(p);
    });
}
