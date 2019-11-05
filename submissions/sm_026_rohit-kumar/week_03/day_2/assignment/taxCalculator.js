var income = 500000
var savings = 50000
tax = 0;


if (income >= 250000 && income < 500000){
    rebate = savings * 0.50;
    rebate = (rebate > 50000) ? 50000 : rebate
    tax = (income - rebate) * 0.10

} else if(income >= 500000 && income < 1000000){
    rebate = savings * 0.30
    rebate = (rebate > 50000) ? 50000 : rebate
    tax = (income - rebate) * 0.20
} else if(income > 1000000){
    rebate = savings * 0.10
    rebate = (rebate > 50000) ? 50000 : rebate
    tax = (income - rebate) * 0.30
}

console.log("Total payable Tax : ", tax)



