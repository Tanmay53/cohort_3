var total = 300;

if (total < 300) {
  console.log("Discount is Invalid. Final price: " + total);
} else {
  var discount = 0.1;
  var discount_amount = total * discount;
  if (discount_amount > 100) {
    discount_amount = 100;
    console.log(
      "Final price: " + total + ", Discount price: " + discount_amount
    );
  } else {
    console.log(
      "Final price: " + total + ", Discount price: " + discount_amount
    );
  }
}
