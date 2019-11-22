var total = 550

if (total>300){
    discount = total * 0.1;
    if (discount > 100){
        discount=100;
    }
}
else if (total<300){
        discount =0;
    console.log("Discount is Invalid. Final price:" +total)
}
    console.log("Final price:" +total , "Discount price:"+discount)