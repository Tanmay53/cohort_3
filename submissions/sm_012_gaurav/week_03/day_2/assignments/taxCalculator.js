var income = 450000;
var savings = 75000;
var tax;
var deductedAmount;
if (income<=500000) {
    deductedAmount = (0.5*savings)<50000?(0.5*savings):50000;
}
else if (income>500000 && income<=1000000) {
    deductedAmount = (0.3*savings)<50000?(0.3*savings):50000;
}
else if (income>1000000) {
    deductedAmount = (0.1*savings)<50000?(0.1*savings):50000;
}

var incomeAfterDeduction = income - deductedAmount;

if (incomeAfterDeduction<=250000) {
    tax = 0;
}
else if (incomeAfterDeduction>250000 && incomeAfterDeduction<=500000) {
    tax = 0.1*incomeAfterDeduction;
}
else if (incomeAfterDeduction>500000 && incomeAfterDeduction<=1000000) {
    tax = 0.2*incomeAfterDeduction;
}
else if (incomeAfterDeduction>1000000) {
    tax = 0.3*incomeAfterDeduction;
}
console.log("The Tax is",tax);


// Income:- 1200000, Savings:- 200000, Tax:- 354000
// Income:- 600000, Savings:- 50000, Tax:- 117000
// Income:- 450000, Savings:- 75000, Tax:- 41250