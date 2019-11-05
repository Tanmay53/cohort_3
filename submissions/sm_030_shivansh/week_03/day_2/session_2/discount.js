var total = 1100;

if (total < 300) {
  console.log('Discount is invalid');
  console.log('Final price:', total);
} else {
  var discount = 0.1 * total;
  if (discount < 100) {
    console.log('Final price:', total - discount);
    console.log('Discount price:', discount);
  } else {
    console.log('Final price:', total - 100);
    console.log('Discount price:', 100);
  }
}
