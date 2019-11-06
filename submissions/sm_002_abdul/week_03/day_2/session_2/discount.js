var total=500
if (total>=300){
    discount=(0.1)*total
    if (discount>100){
        discount_price=100
        final_price=total-discount_price
        console.log('discount_price',discount_price)
        console.log('final_price',final_price)
    }
    else{
        discount_price=discount
        final_price=total-discount_price
        console.log('discount_price',discount_price)
        console.log('final_price',final_price)
    }
}
else{
    final_price=total
    console.log("Discount is Invalid. Final price: ",final_price)
}