var Income = 1050000
var Savings = 500000
var Gross_income = (Income - Savings)
var Tax_rebate_max = 50000
var Tax_rebate
    if (Income<250000){
        Tax_rebate = 0
    }
    else if (Income >250000 && Income <= 500000){
        Tax_rebate = (Savings- 0.5*Savings)
    }
    else if (Income < 1000000){
        Tax_rebate = (Savings - 0.3*Savings)
    }
    else if (Income > 1000000){
        Tax_rebate = (Savings - 0.1*Savings)
    }
var Tax_rebate
    if (Tax_rebate>50000){
        Tax_rebate = Tax_rebate_max
    }
var Taxable_income = Income - Tax_rebate
console.log(Taxable_income)

// for income less than 250000: no tax is applicable
if (Income < 250000){
    console.log("Tax Payable:" + "Nill")
}
//for income greater than 250000 & less than 500000, 
else if(Income >250000 && Income <= 500000){
    console.log("Tax Payable:" + 0.1*((Taxable_income)-250000))
//for income greater than 500000 and less than 1000000
}
else if (Income >500000 && Income <=1000000){
    console.log("Tax Payable:" + (0.1*(250000) + 0.2 * ((Taxable_income-500000))))
}
// for income greater than 1000000
else if (Income > 1000000){
    console.log("Tax Payable:" + (0.1*(250000) + 0.2 *(500000) + 0.3*(Taxable_income-1000000)))
}
