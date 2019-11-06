var finalPrice = 600;
var discount
if (finalPrice < 300) {
  console.log("Discount is Invalid. Final price: " + finalPrice);
}

else  {
  discount = finalPrice / 10;
  
  if (discount > 100)
    discount = 100;
    finalPrice = finalPrice - discount;
    console.log("Final price: " + finalPrice + ", " + "Discount price: " + discount);
  
}