var income = 1100000; //Amount earned
var saving = 350000; //Saving
var rebate;
var slack;
var applicableTax;

console.log("Initial income: " + income);
console.log("Saving: " + saving);

// ============ rebate calculation ============== 
if (income < 500000) {
    rebate = 0.5 * saving;
    if (rebate < 50000) {
        income = income - rebate;
    } else if (rebate >= 50000) {
        rebate = 50000;
        income = income - rebate;
    }
} else if (income < 1000000 && income >= 500000) {
    rebate = 0.3 * saving;
    if (rebate < 50000) {
        income = income - rebate;
    } else if (rebate >= 50000) {
        rebate = 50000;
        income = income - rebate;
    }
} else if (income >= 1000000) {
    rebate = 0.1 * saving;
    if (rebate < 50000) {
        income = income - rebate;
    } else if (rebate >= 50000) {
        rebate = 50000;
        income = income - rebate;
    }
}
console.log("rebate: " + rebate)
console.log("Income after rebate deduction: " + income);

// ============= tax-calculation ============= 
if (income <= 250000) {
    console.log("No tax applied");
} else {
    if (income <= 500000 && income > 250000) {
        slack = income - 250000;
        applicableTax = 0.1 * slack;
    } else if (income <= 1000000 && income > 500000) {
        slack = income - 500000;
        applicableTax = 0.1 * 250000 + 0.2 * slack;
    } else if (income > 1000000) {
        slack = income - 1000000;
        applicableTax = 0.1 * 250000 + 0.2 * 500000 + 0.3 * slack;
    }
    console.log("Tax applied on income is Rs: " + applicableTax);
}

// TEST CASES
// 1.
// Initial income: 110000
// Saving: 10000
// rebate: 5000
// Income after rebate deduction: 105000
// No tax applied
// -------------------------- 
// 2.
// Initial income: 250000
// Saving: 25000
// rebate: 12500
// Income after rebate deduction: 237500
// No tax applied
// ------------------------- 
// 3.
// Initial income: 400000
// Saving: 80000
// rebate: 40000
// Income after rebate deduction: 360000
// Tax applied on income is Rs: 11000
// --------------------------- 
// 4.
// Initial income: 500000
// Saving: 100000
// rebate: 30000
// Income after rebate deduction: 470000
// Tax applied on income is Rs: 22000
// ------------------------- 
// 5.
// Initial income: 700000
// Saving: 150000
// rebate: 45000
// Income after rebate deduction: 655000
// Tax applied on income is Rs: 56000
// ------------------------- 
// 6.
// Initial income: 1000000
// Saving: 300000
// rebate: 30000
// Income after rebate deduction: 970000
// Tax applied on income is Rs: 119000
// ----------------------- 
// 7.
// Initial income: 1100000
// Saving: 350000
// rebate: 35000
// Income after rebate deduction: 1065000
// Tax applied on income is Rs: 144500