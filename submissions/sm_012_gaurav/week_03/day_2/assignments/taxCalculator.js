var income = 1100000;
var savings = 92000;
var tax;
var deductedAmount;
if (income<500000) {
    deductedAmount = (0.5*savings)<50000?(0.5*savings):50000;
}
else if (income<1000000) {
    deductedAmount = (0.3*savings)<50000?(0.3*savings):50000;
}
else if (income>=1000000) {
    deductedAmount = (0.1*savings)<50000?(0.1*savings):50000;
}

var incomeAfterDeduction = income - deductedAmount;

if (incomeAfterDeduction<=250000) {
    tax = 0;
}
else if (incomeAfterDeduction>250000 && incomeAfterDeduction<=500000) {
    tax = (incomeAfterDeduction-250000)*0.1;
}
else if (incomeAfterDeduction>500000 && incomeAfterDeduction<=1000000) {
    tax = 0.1*250000 + (incomeAfterDeduction-500000)*0.2;
}
else if(incomeAfterDeduction>1000000) {
    tax = 0.1*250000 + 0.2*500000 + (incomeAfterDeduction-1000000)*0.3;
}
console.log("The Tax is",tax);
