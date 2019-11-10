var totalIncome = 5000000;
var saving = 200000;
var taxableAmount;
var rebate;
if (totalIncome < 500000) {
  rebate = .5 * saving;
}
  else if (totalIncome < 1000000) {
    rebate = .3 * saving;
}

if (totalIncome > 1000000) {
  rebate = .1 * saving;
}

if ()