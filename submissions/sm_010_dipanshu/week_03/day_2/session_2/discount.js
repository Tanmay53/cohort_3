var total
var discount

if (total >= 300){
    discount = total * 0.1
    if(discount < 100) {
        total = total - discount
    }
    else {
        discount = 100
        total = total - discount;
    }
    console.log('Final price: ' + total + ', Discount price: ' + discount)
}
else{
    console.log('Discount is Invalid. Final price : ' + total)
}