var income=200000
if (income<250000){
    console.log('Income is below 250000,so no tax deducted')
}
else if ((income>250000)&&(income<500000)) {
    savings=50/100*income
    taxable_income=income-savings
    tax=10/100*taxable_income
    console.log("tax paid: ", tax)
}
else if ((income>500000)&&(income<1000000)) {
    savings=30/100*income
    taxable_income=income-savings
    tax=20/100*taxable_income
    console.log("tax paid: ",tax)
}
else {
    savings=10/100*income
    if (savings<50000){
        taxable_income=income-savings
        tax=30/100*taxable_income
        console.log("tax paid: ",tax)
    }
    else {
        savings=50000
        taxable_income=income-savings
        tax=30/100*taxable_income
        console.log("tax paid: ",tax)
    }
}
