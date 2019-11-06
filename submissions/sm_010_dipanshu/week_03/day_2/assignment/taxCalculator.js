var income
var savings
var tax

var savingsRebate
var taxableIncome

console.log('Total income: ' + income)
console.log('Total savings: ' + savings)

if(income >= savings){
    if(income < 500000){
        savingsRebate = savings * 0.5
    }
    else if(income < 1000000){
        savingsRebate = savings * 0.3
    }
    else if(income >= 1000000){
        savingsRebate = savings * 0.1
    }
    
    if(savingsRebate <= 50000){
        income = income - savingsRebate
    }
    else {
        savingsRebate = 50000
        income = income - savingsRebate
    }
    
    console.log('Savings rebate: ' + savingsRebate)
    console.log('Total taxable income: ' + income)
    
    if(income <= 250000){
        tax = 0
        console.log('No tax')
    }
    else if(income > 250000 && income <= 500000){
        taxableIncome = income - 250000
        tax = taxableIncome * 0.1
        console.log('Smallest Slab. Tax: ' + tax)
    }
    else if (income > 500000 && income <= 1000000){
        taxableIncome = income - 500000
        tax = 25000 + (taxableIncome * 0.2)
        console.log('Middle Slab. Tax: ' + tax)
    }
    else{
        taxableIncome = income - 1000000
        tax = 25000 + 100000 + (taxableIncome * 0.3)
        console.log('Highest Slab. Tax: ' + tax)
    }
}
else{
    console.log('Savings cannot be greater than income')
}