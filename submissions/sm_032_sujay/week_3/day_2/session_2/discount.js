var total=1000

var finalPrice
var discountPrice

discountPrice = (0.1 * total)
if((discountPrice<=100)&&(total>=300))
{
    finalPrice= (total - discountPrice)
    console.log('Final price:',finalPrice,'Discount amount:',discountPrice)
}
else {
    finalPrice = total
    console.log('Discount is Invalid. final price:',finalPrice)
}