var total = 200
var discount_price = 0

// by default same as initial price
var final_price = total

if(total >= 300){
    discount_price = total * 0.10
    discount_price = discount_price > 100 ? 100 : discount_price
    final_price = total - discount_price    

    console.log("Final price:", final_price, " Discount price: ", discount_price)
}
else{
    console.log("Discount is Invalid. Final price: ", final_price)
}