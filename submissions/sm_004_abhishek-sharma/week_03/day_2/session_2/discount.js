var total 
var discountAmount = 0.1*total
if(discountAmount > 100)
    discountAmount = 100;
finalAmount = total - discountAmount;
if(total < 300)
    console.log('Discount is Invalid. Final price:', total)
else
    console.log('Final price:', finalAmount + ', Discount price:', discountAmount)

