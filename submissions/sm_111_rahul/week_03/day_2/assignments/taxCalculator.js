var total_income, saving, rebate, taxable_income, slab1, slab2, slab3;

saving = 900000;
total_income = 990000;

if(total_income < 500000)
{
   rebate = saving * 0.5;
   if(rebate >= 50000){
       rebate = 50000;
       taxable_income = total_income - rebate;
   }
   else{
       taxable_income = total_income - rebate;
   }
}
else if(total_income >= 500000 && total_income <1000000){
    rebate  = saving * 0.3;
    if(rebate >= 50000){
        rebate = 50000;
        taxable_income = total_income - rebate;
    }
    else{
        taxable_income = total_income -rebate;
    }
}
else{
    rebate = saving * 0.1;
    if(rebate >= 50000) {
        rebate = 50000;
        taxable_income = total_income - rebate;
    }
    else{
        taxable_income = total_income - rebate;
    }
}
console.log('The Taxable Income is: '+ taxable_income);
if(taxable_income < 250000 ){
    console.log('No Tax');
}else if(taxable_income >= 250000 && taxable_income < 500000){
     slab1 = (taxable_income - 250000)*0.1;
     console.log('Tax: ',slab1)

}else if(taxable_income >= 500000 && taxable_income < 1000000){
     slab2 = ((taxable_income - 500000)*0.2) + 250000*0.1;
     console.log('Tax:', slab2);
}else {
     slab3 = (taxable_income - 1000000)*0.3 + (500000)*0.2 + (250000)*0.1;
     console.log('Tax: ', slab3);
}
