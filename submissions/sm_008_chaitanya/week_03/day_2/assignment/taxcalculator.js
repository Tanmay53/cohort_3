var tax,rebate,income,savings;
var income = 700000;
var savings = 60000;
if(income < 250000){
    tax = 0;
    console.log(0)
}
else if(income >= 250000 && income < 500000){
    tax = (income-250000) * 0.1;
    console.log('tax:',tax)
}
else if(income >= 500000 && income <= 1000000){
    tax = (income- 250000) * 0.2;
    console.log('tax:',tax)
}
else if(income > 1000000){
    tax = (income-250000) * 0.3;
    console.log('tax:',tax)
}
if(income < 500000){
    rebate = savings*0.5;
    console.log('rebate:',rebate)
}
else if(income < 1000000){
    rebate = savings*0.3;
    console.log('rebate:',rebate)
}
else if(income > 1000000){
    rebate = savings*0.1;
    if(rebate > 50000){
        console.log('rebate:',50000)
    }
    else{
        console.log('rebate:',rebate)
    }
}