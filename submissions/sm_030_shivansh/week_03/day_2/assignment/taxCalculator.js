function taxCalculator(taxableIncome) {
  var tax;
  if (taxableIncome < 250000) return 0;
  else if (taxableIncome >= 250000 && taxableIncome <= 500000)
    tax = 0.1 * (taxableIncome - 249999);
  else if (taxableIncome >= 500001 && taxableIncome <= 1000000)
    tax = 0.2 * (taxableIncome - 500000) + 0.1 * 250001;
  else tax = 0.3 * (taxableIncome - 1000000) + 0.2 * 500000 + 0.1 * 250001;

  return tax;
}
var income = 300000;
var saving = 130000;
var totalTax = 0;
var rebate;
var taxableIncome;
if (income < 250000) console.log('Total tax to be paid = ', totalTax);
else {
  if (income >= 250000 && income <= 500000)
    rebate = 0.5 * saving < 50000 ? 0.5 * saving : 50000;
  else if (income >= 500001 && income <= 1000000)
    rebate = 0.3 * saving < 50000 ? 0.3 * saving : 50000;
  else rebate = 0.1 * saving < 50000 ? 0.1 * saving : 50000;

  taxableIncome = income - rebate;
  totalTax = taxCalculator(taxableIncome);
  console.log('Total tax to be paid = ', totalTax);
}
