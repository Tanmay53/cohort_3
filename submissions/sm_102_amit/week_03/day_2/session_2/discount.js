var total = 500;
var discount;
discount = (10 * total) / 100;
// calculate price
if (total >= 300) {
  if (discount < 100) {
    var price = total - discount;
    console.log("Final price: " + price + ", Discount price: " + discount);
  } else {
    discount = 100;
    var price = total - discount;
    console.log("Final price: " + price + ", Discount price: " + discount);
  }
} else {
  console.log("Discount is Invalid. Final price: " + total);
}
