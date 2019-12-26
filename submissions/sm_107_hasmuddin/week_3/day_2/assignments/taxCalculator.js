var total_income = 800000;
var saving = 400000;

if (total_income < 250000) {
  console.log("No tax");
} else if (total_income > 250000 && total_income < 500000) {
  rebate = saving * 0.5;
  payable_amount = total_income - rebate;
  income_tax = payable_amount * 0.1;
  console.log("Tax: " + income_tax);
} else if (total_income > 500000 && total_income < 1000000) {
  rebate = saving * 0.3;
  payable_amount = total_income - rebate;
  income_tax = (payable_amount - 500000) * 0.2 + 250000 * 0.1;
  console.log("Tax: " + income_tax);
} else if (total_income > 1000000) {
  var rebate = saving * 0.1;
  if (rebate > 50000) {
    var rebate = 50000;
    var payable_amount = total_income - rebate;
    var income_tax =
      (payable_amount - 1000000) * 0.3 + 500000 * 0.2 + 250000 * 0.1;
    console.log("Tax: " + income_tax);
  } else if (rebate < 50000) {
    var payable_amount = total_income - rebate;
    var income_tax =
      (payable_amount - 1000000) * 0.3 + 500000 * 0.2 + 250000 * 0.1;
    console.log("Tax: " + income_tax);
  }
}
