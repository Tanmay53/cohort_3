var total_income =  800000;
rebate=0
taxable_income=0
intrest = 0
var savings = 60000;
if(total_income < 500000 )
    rebate = savings - savings * 0.5

else if(total_income > 500000 && total_income < 1000000)
    rebate =     rebate = savings - savings * 0.3


else if(total_income > 1000000 && total_income < 10000000)
    rebate =     rebate = savings - savings * 0.3


else
    rebate = rebate

if(rebate > 50000){
    rebate = 50000
}

taxable_income = total_income - rebate
console.log("rebate" , rebate)
taxable_income = total_income - rebate
if(taxable_income > 250000 && taxable_income < 500000){
    intrest = 250000 - taxable_income * 0.1
}
else if(taxable_income > 50000 && taxable_income < 1000000 )
{
    intrest = (taxable_income - 500000) * 0.2 + 25000 
}
else if(taxable_income > 1000000){
    intrest = (taxable_income- 1000000) * 0.3 + 25000 + 100000
}

console.log("tax paid is " + intrest + " " + "and rebate is"+ rebate)


