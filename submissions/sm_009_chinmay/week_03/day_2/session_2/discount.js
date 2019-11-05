// var total - will contain information of total cost of a sale
var total = 1000;
var discount = 10;

if (total >= 300) {
 discount = total * 0.1

 discount = (discount < 100) ? discount : 100;

 total = total - discount;

 console.log("Final price:" + total + ", Discount price:" + discount)
}
else {
 console.log("Discount is Invalid. Final price : " + total)
}