var income = 400000;
var saving = 100000;
var tax=0;
var Rebate=0;
if(income<=250000){
console.log("NoTax")
}
else if(income>250000 && income<=500000){
   Rebate=saving*0.5;
     if(Rebate>50000){
        Rebate=50000;
     }
   PayableAmount1= income-250000;
   PayableAmount2= PayableAmount1 - Rebate;
   tax= PayableAmount2*0.1
   console.log(Rebate)
   console.log(tax)
}
else if(income>500000 && income<=1000000){
    Rebate=saving*0.3;
    if(Rebate>50000){
        Rebate=50000;
     }
    PayableAmount1= income-250000 ;
    PayableAmount2= 250000;
    PayableAmount3=PayableAmount1 - PayableAmount2;
    
    tax1= PayableAmount1*0;
    tax2= PayableAmount2*0.1;
    tax3= PayableAmount3*0.2;
    tax = tax1+tax2+tax3 -Rebate;
    console.log(tax)
}
else if(income>1000000){
    Rebate=saving*0.1;
    if(Rebate>50000){
        Rebate=50000;
     }
    PayableAmount1= 250000;
    PayableAmount2= 250000;
    PayableAmount3= 500000 ;
    PayableAmount4= income-1000000;
    tax1= PayableAmount1*0;
    tax2= PayableAmount2*0.1;
    tax3= PayableAmount3*0.2;
    tax4= PayableAmount4*0.3;
    tax= tax1+tax2+tax3+tax4 - Rebate;
    console.log(tax)
}