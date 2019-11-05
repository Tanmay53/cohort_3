var total = Number();
var discount;
if (total > 300) {
  discount = 0.1 * total;
  if (discount > 100) {
    discount = 100;
    console.log("Discount is " + discount);
  } else {
    console.log("Discount is " + discount);
  }
} else {
  console.log("Buy more suffs");
}
