var total=900
var discount=total*0.10
final=total-discount
if(total>=300 && discount<=100)
{
    console.log("final prize:",final)
    console.log("discountprice:",discount)
}
else if(total>1000){
    console.log("final prize:",total-100)
    console.log("Discountprize",100)
}
else{
    console.log("final prize:",total)
    console.log("Discount is Invalid")

}