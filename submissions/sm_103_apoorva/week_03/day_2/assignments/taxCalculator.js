var income= 1000000 , saving= 600000, rebate , ti, s, tax ;
if(income<250000){
    console.log("No tax")
}
else if(income>1000000){
if(saving>500000){
    rebate=50000;
    ti=income-rebate;
}
else{
    rebate=saving * 0.1;
    ti=income-rebate;
}
}

else if(250000< income < 500000){
    if(saving>100000){
        rebate=50000;
        ti=income-rebate;
    }
    else{
        rebate=saving * 0.5 ;
        ti=income-rebate;
    }
}
else if(500000<= income <= 1000000){
    if(saving>166666){
        rebate=50000;
        ti=income-rebate;
    }
    else{
        rebate=saving*0.3;
        ti=income-rebate;
    }
}
    if(ti>1000000)
    {
        s=(ti-1000000)*0.3;
        tax=s+125000;
    }
    else if(ti<1000000)
    {
        s=(ti-500000)*0.2;
        tax=s+25000;
    }
    else if(ti<500000)
    {
        s=(ti-250000)*0.1;
        tax=s;
    }
 console.log(income)
 console.log(rebate)
 console.log(tax)
