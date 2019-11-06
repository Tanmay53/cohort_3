var finalPrice = 900;
var Discount = finalPrice*0.1

if(finalPrice<300){
    console.log(finalPrice, +''+ "Discount is Invalid")
}

else if(Discount>=100){
    var finalPrice = finalPrice-100
    console.log("Discounted :" +finalPrice)
}
else if(Discount<100){
    var finalPrice = finalPrice-Discount
    console.log("finalPrice :" +''+ finalPrice,"Discount Amount:" + Discount);
}