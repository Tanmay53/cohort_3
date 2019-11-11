var income = 1100000;
var savings = 100000;
var income_tax;
var rebate = 0;

if (income <= 500000) {
	rebate = savings * .50;
} else if (income <= 1000000) {
	rebate = savings * .30;
} else if (income > 1000000 ) {
	rebate = savings * .10;
}

if (rebate > 50000) {
	rebate = 50000;
}

income = income - rebate;

if(income <= 250000) {
	income_tax = 0;
} else if (income <= 500000) {
	income_tax = (income - 250000) * .10;
} else if (income <= 1000000) {
	income_tax = 250000 * .10 + (income - 500000) * .20;
} else if (income > 1000000) {
	income_tax = 250000 * .10 + 500000 * .20 + (income - 1000000) * .30;
}

console.log(income_tax)

