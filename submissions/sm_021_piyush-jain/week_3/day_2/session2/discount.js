var total=200
var discount
if(total>300)
{
if(total%10<=100){
discount=(total*10)/100
total=total-(total*10)/100
console.log('Final price:'+total+ 'Discount price:'+discount)

}
}
if(total<300){
discount=0;
console.log('Final price:'+total+ 'Discount price:'+discount)
}
