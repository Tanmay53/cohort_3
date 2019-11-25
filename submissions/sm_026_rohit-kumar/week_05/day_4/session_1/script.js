// global 
customerArr = []

function getAccountHolders(accHolder) {
    return accHolder.split(',')
}

function Customer(fname, lname, dob, balance, accNo, accHolder) {
    this.firstname = fname
    this.lastname  = lname
    this.dob       = dob
    this.balance   = balance
    this.accNo     = accNo
    this.accHolder = getAccountHolders(accHolder)

    this.displayDetails = function() {
        return "First name : " + this.firstname +
               "<br>Last name : " + this.lastname +
               "<br>Date of Birth : " + this.dob +
               "<br>Balance : " + this.balance +
               "<br>Account Number : " + this.accNo +
               "<br>Share Account Holders : " + this.accHolder.join(', ')
    }
}

function addCustomer() {
    // get the reference to display paragraph
    display = document.getElementById('display')

    fname = document.getElementById('inputFirstname').value
    lname = document.getElementById('inputLastname').value
    dob = document.getElementById('inputDob').value
    balance = document.getElementById('inputBalance').value
    accNo = document.getElementById('inputAccno').value
    accHolder = document.getElementById('inputAccHolders').value

    cust = new Customer(fname, lname, dob, balance, accNo, accHolder)
    //alert(cust.displayDetails())
    display.innerHTML = cust.displayDetails()

    customerArr.push(cust)
}

function printCustomer() {
    //alert('print customer')
    displayContainer = document.getElementById('displayContainer')
    for(let i = 0; i < customerArr.length; i++) {
        elem = document.createElement('p')
        elem.innerHTML = customerArr[i].displayDetails()
        displayContainer.appendChild(elem)
    }
}