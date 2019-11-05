var totalIncome = Number(490000);
var tax;
var taxableIncome;
var taxableAmount;
var rebate;
var savings = Number(400000);

// Checking if savings is not greater than total income
if (savings > totalIncome) {
  console.log("Savings can't be more than total Income");
} else {
  // Calculating Rebate
  if (totalIncome < 500000) {
    rebate = 0.5 * savings;
  } else if (totalIncome < 1000000) {
    rebate = 0.3 * savings;
  } else if (totalIncome > 1000000) {
    rebate = 0.1 * savings;
  }
  // Checking if rebate is more than capping
  if (rebate > 50000) {
    rebate = 50000;
  }

  // Calculating taxable income
  taxableIncome = totalIncome - rebate;

  // Calculating Taxes
  if (taxableIncome < 250000) {
    console.log("No tax applied!, Your total income is below taxation slab");
  } else if (taxableIncome > 250000 && taxableIncome <= 500000) {
    taxableAmount = taxableIncome - 250000;
    tax = 0.1 * taxableAmount;
    console.log(
      "Total Income : ",
      totalIncome + "\n Rebate : ",
      rebate + "\n Taxable Amount : ",
      taxableAmount + "\n Tax Percentage : 10%" + "\n Tax Amount : ",
      tax
    );
  } else if (taxableIncome > 500000 && taxableIncome <= 1000000) {
    taxableAmount = taxableIncome - 500000;
    tax = 0.2 * taxableAmount;
    console.log(
      "Total Income : ",
      totalIncome + "\n Rebate : ",
      rebate + "\n Taxable Amount : ",
      taxableAmount + "\n Tax Percentage : 20%" + "\n Tax Amount : ",
      tax
    );
  } else if (taxableIncome > 1000000) {
    taxableAmount = taxableIncome - 1000000;
    tax = 0.3 * taxableAmount;
    console.log(
      "Total Income : ",
      totalIncome + "\n Rebate : ",
      rebate + "\n Taxable Amount : ",
      taxableAmount + "\n Tax Percentage : 30%" + "\n Tax Amount : ",
      tax
    );
  }
}

// Test case is used
// Case 1:
// Total Income: 750000
// Savings : 200000

// Case 2:
// Total Income: 800000
// Savings : 400000

// Case 3:
// Total Income: 1800000
// Savings : 40000

// Case 4:
// Total Income: 400000
// Savings : 100000

// Case 5:
// Total Income: 300000
// Savings : 100000

// Case 6:
// Total Income: 300000
// Savings : 80000

// Case 7:
// Total Income: 1050000
// Savings : 80000

// Case 8:
// Total Income: 1050000
// Savings : 100000

// Case 9:
// Total Income: 1050000
// Savings : 600000

// Case 10:
// Total Income: 1040000
// Savings : 60000000000

// Case 11:
// Total Income: 1050000
// Savings : 600000

// Case 12:
// Total Income: 105000
// Savings : 60000

// Case 13:
// Total Income: 105000
// Savings : 60000

// Case 14:
// Total Income: 500000
// Savings : 20

// Case 15:
// Total Income: 500003
// Savings : 20

// Case 16:
// Total Income: 500001
// Savings : 400000

// Case 17:
// Total Income: 400003
// Savings : 12

// Case 18:
// Total Income: 490000
// Savings : 400000
