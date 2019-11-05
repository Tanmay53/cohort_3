var finalPrice=2000
var discountAmount, total
if (finalPrice< 300)
    console.log('Discount is Invalid. Final price:', finalPrice)
else{
    total= finalPrice * 0.10
    if(total > 100)
        total=100
    discountAmount= finalPrice - total
    console.log('Final price:', finalPrice, ', Discount price:', discountAmount)
}