var total=2000
var discount=(total/10)

if (total>=300){
    if (discount<=100){
        console.log("Final price : ",total-discount,', Discount price : ',discount)
    }
    else{
        console.log("Final price : ",total-100,', Discount price : 100')
    }
}
else{
    console.log("Discount is invalid. Final price : ",total)
}    