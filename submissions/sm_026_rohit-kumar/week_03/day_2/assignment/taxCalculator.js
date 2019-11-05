var income = 1020000
var savings = 500000
tax = 0


if (income >= 250000 && income < 500000){
    rebate = savings * 0.50
    rebate = (rebate > 50000) ? 50000 : rebate

} else if(income >= 500000 && income < 1000000){
    rebate = savings * 0.30
    rebate = (rebate > 50000) ? 50000 : rebate

} else if(income >= 1000000){
    rebate = savings * 0.10
    rebate = (rebate > 50000) ? 50000 : rebate
}

taxable_income = income - rebate

if (taxable_income >= 250000 && taxable_income < 500000){
    tax = taxable_income * 0.10

} else if(taxable_income >= 500000 && taxable_income < 1000000){
    tax = taxable_income * 0.20
} else if(taxable_income >= 1000000){
    tax = taxable_income * 0.30
}

console.log("Total payable Tax : ", tax)



