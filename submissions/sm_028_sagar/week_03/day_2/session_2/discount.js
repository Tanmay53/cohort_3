var total = 1350; //total cost of sale or final price of purchase
var discountPrice; //discounted price of purchase

if (total > 300 && total < 1000) {
    discountPrice = total - 0.1 * total;
    console.log("Final Price: " + total + ", Discount Price: " + discountPrice);
} else if (total > 1000) {
    discountPrice = total - 100;
    console.log("Final Price: " + total + ", Discount Price: " + discountPrice);
} else {
    console.log("Discount is Invalid. Final Price:", total);
}