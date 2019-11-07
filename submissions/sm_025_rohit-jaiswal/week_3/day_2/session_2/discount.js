var total = 299
if(total > 300){
    discount= total*0.1
    if (discount >=100)
        discount=100
        total=total-discount
    console.log("Discount is " + discount + " Final Price " + total)
}
else if(total<300){
    console.log("Discount is invalid")
}

	