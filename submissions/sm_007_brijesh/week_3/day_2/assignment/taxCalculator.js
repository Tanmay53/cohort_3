function tax_cal(income, saving) {
    var income = income;
    var saving = saving;
    var tax = 0;
    var rebate = 0;


    if (income < 250000) {
        console.log('No Tax')
    }

    else {
        if (income > 250000 && income < 500000) {
            rebate = 0.5 * saving;
            if (rebate > 50000) {
                rebate = 50000;
            }
            income = income - rebate;
            console.log(rebate)
            income = income - 250000;
            tax = 0.1 * income;
            /* tax = ((income - rebate)-250000) * 0.1 */
        }
        else if (income > 500000 && income <= 1000000) {
            rebate = 0.3 * saving;
            if (rebate > 50000) {
                rebate = 50000;
            }
           /* income = income - rebate;
            console.log(rebate)
            income = income - 250000;
            tax = 0.2 * income; */
            console.log(rebate);
           tax = ((income - rebate) - 500000) * 0.2;

        }
        else if (income > 1000000){
        rebate = 0.1 * saving;
        if(rebate > 50000){
            rebate = 50000;
        }
        tax = ((income - rebate) - 1000000) * 0.3;

        }


}
console.log(tax)
}
tax_cal(1200000, 180000)