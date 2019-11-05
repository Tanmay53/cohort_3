var totalIncome = 600000;
var savingAmt = 0;
var rebate, taxableIncome, taxAmt, netIncome;

// check
if (totalIncome > savingAmt) {
  // calculate rebate
  if (totalIncome >= 1000000) {
    rebate = 0.1 * savingAmt;
  } else if (totalIncome >= 500000) {
    rebate = 0.3 * savingAmt;
  } else {
    rebate = 0.5 * savingAmt;
  }

  // check rebate
  if (parseInt(rebate) > 50000) {
    rebate = 50000;
  }
  taxableIncome = totalIncome - parseInt(rebate);
} else {
  console.log("You can't save more than you earn!");
}

// calculate tax
if (taxableIncome != undefined) {
  if (taxableIncome > 1000000) {
    taxAmt =
      0.3 * (taxableIncome - 1000000) +
      0.2 * (taxableIncome - 500000) +
      0.1 * (taxableIncome - 250000);
    netIncome = taxableIncome - parseInt(taxAmt);
  } else if (taxableIncome > 500000 && taxableIncome <= 1000000) {
    taxAmt = 0.2 * (taxableIncome - 500000) + 0.1 * (taxableIncome - 250000);
    netIncome = taxableIncome - parseInt(taxAmt);
  } else if (taxableIncome >= 250000 && taxableIncome <= 500000) {
    taxAmt = 0.1 * (taxableIncome - 250000);
    netIncome = taxableIncome - parseInt(taxAmt);
  } else {
    taxAmt = "Congratulatons, You don't have to pay any taxes!!!";
    netIncome = taxableIncome;
  }
}

console.log(
  "Total Income: " +
    totalIncome +
    "\nSaving Amount: " +
    savingAmt +
    "\nRebate: " +
    rebate +
    "\nTaxable Income: " +
    taxableIncome +
    "\nTax Amount: " +
    taxAmt +
    "\nNet Income: " +
    (totalIncome - taxAmt)
);
