// assuming income and savings are positive.
var income=270000, saving=400000, grossTax, deductable, taxableIncome
console.log('income=', income, ', savings=', saving)
// checking for deductable slab
// case 1
if (income<500000){
    deductable=saving * 0.50
}
// case 2
else if (income< 1000000){
    deductable=saving * 0.30
}
// case 3
else {
    deductable=saving * 0.10
}

// deductable cap of 50000 is checked and applied, even if saving is way greater than income
if(deductable > 50000)
    deductable=50000
console.log('Deductable:', deductable)
taxableIncome=income-deductable
console.log('Taxable Income: ',taxableIncome)
// checking for tax slab
if(taxableIncome<250000){
    grossTax=0
}
else if(taxableIncome<500000){
    grossTax=(taxableIncome-250000) * 0.10
}
else if(taxableIncome<1000000){
    grossTax=(taxableIncome-500000) * 0.20 + 25000
}
else{
    grossTax=(taxableIncome-1000000) * 0.30 + 125000
}
console.log('Income Tax= ', grossTax)