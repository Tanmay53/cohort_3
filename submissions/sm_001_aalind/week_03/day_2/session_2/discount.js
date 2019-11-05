var total = 1000.1;

if(total < 300) {
	console.log("Discount is Invalid. Final price: " + total);
} else {
	var discount = total*.10;
	if(discount > 100) {
		console.log("Final price: " + (total-100) + ", Discount price: " + 100);
	} else {
		console.log("Final price: " + (total-discount) + ", Discount price: " + discount);
	}
}