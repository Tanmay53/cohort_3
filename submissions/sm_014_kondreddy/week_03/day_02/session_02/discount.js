var total, DiscountAmount, finalPrice;
total = 250
if (total >= 300) {
    DiscountAmount = total*0.1;
    console.log(DiscountAmount)
    if (DiscountAmount > 100) {
        DiscountAmount = 100;
    }
    finalPrice = total-DiscountAmount;
console.log('final_Price' + finalPrice)
console.log( 'Discount' +DiscountAmount)
} 
else if (total < 300) {
    DiscountAmount = 0;
    finalPrice = total;
console.log ('Discount is invalid Final_Price' + finalPrice)
}
