var income;
var savings;
var income_tax;
var rebate;

if (income <= 500000) {
	rebate = savings*.50;
	if (rebate > 50000) {
		rebate = 50000
	}
} else if (income <= 1000000) {
	rebate = savings*.30;
	if (rebate > 50000) {
		rebate = 50000
	}
} else if (income > 1000000 ) {
	rebate = savings*.10;
	if (rebate > 50000) {
		rebate = 50000
	}
}

if(income-rebate < 250000) {
	income_tax = 0;
} else if (income-rebate >= 250000 && income-rebate <= 500000) {
	income_tax = (income - 250000) * .10;
} else if (income-rebate > 500000 && income-rebate <= 1000000) {
	income_tax = 250000*.10 + (income - 500000)*.20;
} else if (income-rebate > 1000000) {
	income_tax = 250000*.10 + 500000*.20 + (income-1000000)*.30;
}

console.log(income_tax)