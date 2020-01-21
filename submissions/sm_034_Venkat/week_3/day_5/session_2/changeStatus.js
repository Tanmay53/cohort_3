var venkat = {
    Name: 'venkat Subbu',
    AccountNumber: '32680144064',
    Branch: 'Darsi',
    Balance: '50,000',
    Status: "none",
    CreditLimit: 1
}

function changeStatus(person, statusVal) {
    if (statusVal == "Basic") {
        person.Status = statusVal;
        person.CreditLimit = '80,000';
        console.log(venkat)
    }
    else if (statusVal == "Premium") {
        person.Status = statusVal;
        person.CreditLimit = '3,00,000';
        console.log(venkat)
    }
    else if (statusVal == "Platinum") {
        person.Status = statusVal;
        person.CreditLimit = '6,00,000';
        console.log(venkat)
    }
}
changeStatus(venkat, 'Platinum')