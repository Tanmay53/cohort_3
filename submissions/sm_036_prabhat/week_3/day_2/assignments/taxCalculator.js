var total = 5000000;
var taxFree = 250000;
var tax1 = 0;
var tax2 = 0;
var tax3 = 0;

if (total > 250000 && total < 500000){
  var amtTaxable = total - taxFree;
  console.log("Amt = "+ amtTaxable);
  if (amtTaxable < 250000 ) {
    var rebate = total *.5;
    if (rebate > 50000) {
      var taxable = amtTaxable - 50000;
      var payable = taxable*.1;
      console.log("Tax Payable = "+payable)
    }
    else{
      var taxable = amtTaxable - rebate;
      var payable = taxable*.1;
      console.log("Tax Payable = "+payable)
    } 
  }
}
else if (total > 500000 && total < 1000000){
  var amtTaxable = total - taxFree;
  console.log("Amt = "+ amtTaxable);
  if (amtTaxable < 750000 ) {
    var rebate = total *.3;
    console.log("Rebate = "+ rebate)
    if (rebate > 50000) {
      var taxable = amtTaxable - 50000;
      var payable = taxable*.1;
      console.log("Tax Payable = "+payable)
    }
    else{
      var taxable = amtTaxable - rebate;
      var payable = taxable*.1;
      console.log("Tax Payable = "+payable)
    } 
  }
}
else if (total > 1000000){
  var amtTaxable = total - taxFree;
  console.log("Amt = "+ amtTaxable);
  if (amtTaxable < 250000 ) {
    var rebate = total *.1;
    console.log("Rebate = "+ rebate)
    if (rebate > 50000) {
      var taxable = amtTaxable - 50000;
      var payable = taxable*.1;
       tax1 = payable;
    }
    else{
      var taxable = amtTaxable - rebate;
      var payable = taxable*.1;
      tax1 = payable;
    } 
  }
  else if (amtTaxable < 500000 ) {
    console.log("Rebate = "+ rebate)
     var rebate = total *.1;
    if (rebate > 50000) {
      var taxable = amtTaxable - 50000;
      var payable = taxable*.2;
      tax2 = payable;
    }
    else{
      var taxable = amtTaxable - rebate;
      var payable = taxable*.2;
      tax2 = payable;
    } 
  }
  else if (amtTaxable < 7500000 ) {
    var rebate = total *.3;
     var rebate = total *.1;
    if (rebate > 50000) {
      var taxable = amtTaxable - 50000;
      var payable = taxable*.3;
      tax3 = payable;
    }
    else{
      var taxable = amtTaxable - rebate;
      var payable = taxable*.3;
      tax3 = payable;
    } 
  }
  console.log("Tax Payable = "+tax1+tax2+tax3)
}
else{
  console.log("No Tax !!!")
}