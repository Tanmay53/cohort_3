var income=700000
var saving=50000

if (income <= 500000) {
        deduction = (saving * 0.5);
        if (deduction <= 50000) {
            netincome = (income - deduction);
        }
        else {
            netincome = (income - 50000);
        }
}
else if (income > 500000 & income <=1000000 ) {
    deduction = (saving * 0.3);
    if (deduction <= 50000) {
        netincome = (income - deduction);
    }
    else {
        netincome = (income - 50000);
    }
}
else {
    deduction = (saving * 0.1);
    if (deduction <= 50000) {
        netincome = (income - deduction);
    }
    else {
        netincome = (income - 50000);
    }
}

if (netincome<=250000){
    tax=0
}
else if (netincome > 250000 & netincome <= 500000){
    tax=(netincome-250000)*0.1
}
else if (netincome > 500000 & netincome <= 1000000){
    tax= 25000+ (netincome-500000)*0.2
}
else{
    tax=25000 + 100000 + (netincome-1000000)*0.3
}
console.log(tax)
