//tax based on the income and savings
var income = 400000; 
var savings = 200000;
var tax = 0;
var rebate = 0;
var taxableIncome = 0;

// Calculating Rebate
if (income < 500000) {
	rebate = savings * 0.5;
} else if (500000 <= income < 1000000) {
	rebate = savings * 0.3;
} else if (income >= 1000000 ) {
	rebate = savings * 0.1;
}

// Max Rebate
rebate = (rebate > 50000) ? 50000 : rebate;

// Taxable Income
taxableIncome = income - rebate;


// Calculating tax
 if(taxableIncome < 250000) {
  tax = 0;
 } else if (250000<=taxableIncome<=500000) {
  tax = (taxableIncome - 250000) * 0.1;
 } else if (500000<taxableIncome<1000000) {
  tax = 250000 * 0.1 + (taxableIncome - 500000) * 0.2;
 } else {
  tax = 250000 * 0.1 + 500000 * 0.2 + (taxableIncome - 1000000) * 0.3;
 }

 // Tax output on console
 console.log("You have to pay Rs.", tax, "/- as your income tax.")