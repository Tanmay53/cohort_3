var inptAmnt = 450000;
var inptSavings = 12000;
var outptTax;
var rebate;
// Calculating Tax,
if (inptAmnt < 250000) {
    outptTax = 0;
    console.log('Tax to be paid is ', outptTax)
}
else if (inptAmnt >= 250000 && inptAmnt < 500000) {
    outptTax = (inptAmnt - 250000) * 0.1;
    console.log('Tax to be paid is ', outptTax)
}
else if (inptAmnt >= 500000 && inptAmnt < 1000000) {
    outptTax = (inptAmnt - 500000) * 0.2 + (500000 - 250000) * 0.1;
    console.log('Tax to be paid is ', outptTax)
}
else if (inptAmnt >= 1000000) {
    outptTax = (inptAmnt - 1000000) * 0.3 + (1000000 - 500000) * 0.2 + (500000 - 250000) * 0.1;
    console.log('Total tax to be paid', outptTax)
}
// Calculating Rebate,
if (inptAmnt < 500000) {
    rebate = inptSavings * 0.5;
    if (rebate > 50000) {
        rebate = 50000;
        console.log('Calculated Rebate is ', rebate)
    }
    else {
        console.log('Calculated Rebate is ', rebate)
    }
}
else if (inptAmnt < 1000000) {
    rebate = inptSavings * 0.3;
    if (rebate > 50000) {
        rebate = 50000;
        console.log('Calculated Rebate is ', rebate)
    }
    else {
        console.log('Calculated Rebate is ', rebate)
    }
}
else if (inptAmnt >= 1000000) {
    rebate = inptSavings * 0.1;
    if (rebate > 50000) {
        rebate = 50000;
        console.log('Calculated Rebate is ', rebate)
    }
    else {
        console.log('Calculated Rebate is ', rebate)
    }
}
