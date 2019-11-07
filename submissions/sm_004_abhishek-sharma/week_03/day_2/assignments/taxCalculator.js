var totalIncome = 800000, savings = 200000
var taxableIncome, rebate, tax

// For below 2.5L Slab
if(totalIncome < 250000){
    tax = 0
}
// For Between 2.5L and 5L Slab
else if(totalIncome > 250000 && totalIncome < 500000){
    rebate = 0.5*savings
    taxableIncome = totalIncome - 250000 -rebate
    tax = 0.1*taxableIncome
}
// For Between 5L and 10L Slab
else if(totalIncome > 500000 && totalIncome < 1000000){
    rebate = 0.3*savings;
    taxableIncome = totalIncome - rebate;
    if(taxableIncome < 500000 ){
        tax = 0.1*taxableIncome
    }
    else{
        tax = 0.2*(taxableIncome - 500000) + 25000
    }
}
// For above 10L Slab
else if(totalIncome > 1000000){
    rebate = 0.3*savings;
    if(rebate > 50000){
        rebate = 50000
    }
    taxableIncome = totalIncome - rebate;
    if(taxableIncome < 1000000 ){
        tax = 0.2*(taxableIncome - 500000) + 25000
    }
    else{
        tax = 0.3*(taxableIncome - 1000000) + 125000
    }
}
console.log("For Income = " + totalIncome + " and Savings = " + savings + " the tax = " + tax)

