var total=15200;
if(total>=1000)
{
    var discount=100;
    var final=total-discount;
    console.log('Final price:'+final+' '+', Discount price:'+discount)
}
else if(total>=300)
{
    var discount=total*0.1;
    var final=total-discount;
    console.log('Final price:'+final+' '+', Discount price:'+discount)
}
else
{
    console.log('Discount is invalid.Final price:'+total)
}

