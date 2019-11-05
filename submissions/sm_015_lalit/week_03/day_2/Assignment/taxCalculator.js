var income = 500000
var savings = 300000
if (income <= 500000) {
    sb = (savings * 0.5)
    if (sb > 50000) {
        sb = 50000
    }
    netIncome = income - sb
} else if (500000 < income & income <= 1000000) {
    sb = (savings * 0.3)
    if (sb > 50000) {
        sb = 50000
    }
    netIncome = income - sb
} else if (1000000 < income) {
    sb = (savings * 0.1);
    if (sb > 50000) {
        sb = 50000
    }
    netIncome = income - sb;
}
if (250000 <= netIncome & netIncome <= 500000) {
    taxableIncome = netIncome - 250000;
    taxAmount = taxableIncome * 0.1;
    console.log("Taxable Income: " + taxableIncome + " , Tax Payable: " + taxAmount)

} else if (netIncome < 250000) {
    taxableIncome = 0
    taxAmount = taxableIncome * 0.1;
    console.log("Taxable Income: " + taxableIncome + " , Tax Payable: " + taxAmount)

} else if (500000 < netIncome & netIncome <= 1000000) {
    taxableIncome = netIncome - 500000;
    taxAmount = taxableIncome * 0.2 + 25000;
    console.log("Taxable Income: " + (taxableIncome + 500000) + " , Tax Payable: " + taxAmount)
} else {
    taxableIncome = netIncome - 750000;
    taxAmount = taxableIncome * 0.3 + 125000;
    console.log("Taxable Income: " + (taxableIncome + 750000) + " , Tax Payable: " + taxAmount)

}