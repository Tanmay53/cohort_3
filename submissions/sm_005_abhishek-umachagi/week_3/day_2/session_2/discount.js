var total = 299
if(total>300){
    discount=totoal*0.1
    if (discount >= 100)
    disount=100
    total=total-discount
    console.log("final price:" + total, "discount price:" + discount)
}
else if(total<300){
    console.log("discount is invalid")
}