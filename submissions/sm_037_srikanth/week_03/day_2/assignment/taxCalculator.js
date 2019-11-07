var income = 270000;
var savings;
var rebate = 60000;
var tax;
var total_income;

if(income < 500000){
      rebate = (savings/10)*5;
     if(rebate < 50000){
         income = income - rebate;
     }
     else {
         rebate = 50000;
         income = income - rebate;
     }
}
else if((income <= 1000000) && (income >= 500000)){
    rebate = (savings/10)*3;
    if(rebate < 50000){
        income = income - rebate;
    }
    else {
        rebate = 50000;
        income = income - rebate;
    }
}
else {
    rebate = (savings/10);
    if(rebate < 50000){
        income = income - rebate;
    }
    else {
        rebate = 50000;
        income = income - rebate;
    }
}
console.log("Total income after rebate: " + income);
if(income < 250000){
    tax = 0;
    console.log(tax);
}
else if(250000 <= income <= 500000){
    total_income = income - 250000 ;
    tax = total_income/10;
}
else if (500000 < income <= 1000000){
    total_income = income - 500000 ;
    tax = (total_income/10)*2;
}
else{
    total_income = income - 1000000 ;
    tax = (total_income/10)*3;
}
console.log("Total tax: " + tax);