var income=250000
var saving=00000
console.log("Income : ",income)
console.log("Saving : ",saving)
var Tax=0
var rebate=0
var TOI=0   // Final Tax on Income

if (income>1000000){
    rebate=(saving/10)
    if (rebate<=50000){
        TOI=income-rebate
        if (TOI>1000000){
            Tax=25000+100000+((3/10)*(TOI-1000000))
            console.log("Tax : ",Tax);
        }
        else{
            Tax=25000+((1/5)*(TOI-500000))
            console.log("Tax : ",Tax);
        }
    }
    else{
        TOI=income-50000
        if (TOI>1000000){
            Tax=25000+100000+((3/10)*(TOI-1000000))
            console.log("Tax : ",Tax);
        }
        else{
            Tax=25000+((1/5)*(TOI-500000))
            console.log("Tax : ",Tax);
        }
    }
}

else if ((500000<income) && (income<=1000000)){
    rebate=((3/10)*saving)
    if (rebate<=50000){
        TOI=income-rebate
        if (TOI>500000){
            Tax=25000+((1/5)*(TOI-500000))
            console.log("Tax : ",Tax);
        }
        else{
            Tax=((1/10)*(TOI-250000))
            console.log("Tax : ",Tax);
        }
    }
    else{
        TOI=income-50000
        if (TOI>500000){
            Tax=25000+((1/5)*(TOI-500000))
            console.log("Tax : ",Tax);
        }
        else{
            Tax=((1/10)*(TOI-250000))
            console.log("Tax : ",Tax);
        }
    }
}

else if ((250000<income) && (income<=500000)){
    rebate=(saving/2)
    if (rebate<=50000){
        TOI=income-rebate
        if (TOI>250000){
            Tax=((1/10)*(TOI-250000))
            console.log("Tax : ",Tax);
        }
        else{
            console.log("Tax : ",Tax);
        }
    }
    else{
        TOI=income-50000
        if (TOI>250000){
            Tax=((1/10)*(TOI-250000))
            console.log("Tax : ",Tax);
        }
        else{
            console.log("Tax : ",Tax);
        }
    }
}


else{
    console.log("Tax : ",Tax)
}