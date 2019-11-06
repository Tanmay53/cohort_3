var total=400;

if(total<300)
{
    console.log('Discount is invalid')
    console.log('final price='+total)

}

else if(total>1000)
{
    console.log('Discount is invalid')
    console.log('final price='+ total)

}



else if(300<total<=1000)
{
    console.log('final price=',total, 'Discount Price'+total/10)
}