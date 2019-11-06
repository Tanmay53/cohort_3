var total = 7000
if (300 <= total & total <= 1000) {
    discountAmount=total*0.1 ;
    finalPrice=total*0.9 ;
    console.log("Final price: "+finalPrice+" , Discount price: "+discountAmount)
    
} else if (total < 300) {
    discountAmount=0 ;
    finalPrice=total;
    console.log("Discount is Invalid. Final price: "+finalPrice)
    
} else {
    discountAmount=100;
    finalPrice=total-100;
    console.log("Final price: "+finalPrice+" , Discount price: "+discountAmount)
    
}