function tax(income, savings) {
    var income = income || 1200000;
    var tax = 0;
    var rebate = 0;
    var savings = savings || 400000;
    if (income < 250000) {
        console.log('No_Tax')
    }
    else {
        if (income > 250000 && income <= 500000) {
            rebate = savings * 0.5;
            if (rebate > 50000) {
                rebate = 50000
            }
            tax = ((income - 50000) - 250000) * 0.1;
            console.log('Final_Tax_is' + tax)
        }
        else if (income > 500000 && income <= 1000000) {
            rebate = savings * 0.3;
            if (rebate > 50000) {
                rebate = 50000
            }
            tax = 25000 + ((income - rebate) - 500000) * 0.2;
            console.log('Final_Tax_is' + tax)
        }
        else if (income > 1000000) {
            rebate = (savings * 0.1)
            if (rebate > 50000) {
                rebate = 50000
            }
            tax = 125000 + ((income - rebate) - 1000000) * 0.3;
            console.log('Final_Tax_is' + tax)
        }
    }
}
tax()