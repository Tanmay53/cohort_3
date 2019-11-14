var total = 1100000
var saving = 100000
var rebate, tax, salary, income, slab
if (total > saving) {
    if (total >= 1000000) {
        rebate = 0.1 * saving

    }
    if (total >= 500000 && total < 1000000) {
        rebate = 0.3 * saving
    }
    else {
        rebate = 0.5 * saving
    }
    if (rebate > 50000) {
        rebate = 50000
    }
    income = total - parseInt(rebate)
    console.log(income)
}
else {
    console.log('Income invalid')
}

if (income >= 1000000) {
    slab = 0.3 * (income - 1000000)
    tax= slab + 0.2 * (500000) + 0.1 * (250000)
}
else if (income >= 500000 && income < 1000000) {
    slab = 0.2 * (income - 500000)
    tax= slab + 0.1 * (250000)
}
else if (income >= 250000 && income < 500000) {
    tax = 0.1 * (income - 250000)
}
else {
    console.log('no tax')
}
console.log(tax)