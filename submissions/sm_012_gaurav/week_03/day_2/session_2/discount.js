var total;
if (total>=300) {
    var discount = 0.1*total;
    if(discount>100) {
        console.log("Final price: "+(total-100)+", Discount price: "+100);
    }
    else {
        console.log("Final price: "+(total-discount)+", Discount price: "+discount);
    }
}
else
    console.log("Discount is Invalid. Final price: "+total);