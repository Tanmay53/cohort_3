var amount, tax, savings, rebate;
amount = 700000;
savings = 200000; 
if (amount < 250000) {
    tax = 0;
    console.log('tax:', tax)
}
else if (amount >= 250000 && amount < 500000) {
    tax = 250000*0.1;
    console.log('tax:',tax)
}
else if (amount >= 500000 && amount < 1000000) {
    tax = 500000*0.2;
    console.log('tax:',tax)
}
else if (amount >= 1000000) {
    tax = 200000*0.3;
    console.log('tax:',tax)
}
 if(amount < 500000){
rebate = amount-savings*0.5;
console.log('rebate:',rebate)
}
else if (amount < 1000000) {
rebate = amount-savings*0.3;
console.log("rebate:", rebate)
}
else if (amount >= 1000000) {
    rebate = amount-savings*0.1;
    if (rebate > 50000) {
        console.log("rebate:", 50000)
    }
    else {
    console.log("rebate:", rebate)
    }
}
