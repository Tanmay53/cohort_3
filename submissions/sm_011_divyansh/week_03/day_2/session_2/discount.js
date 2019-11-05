var total=200
var disc
if(total>=300)
  {
    disc=total*0.1
    if(disc<100)
    {
        total=total-disc
    }
    else
    {
      disc=100
      total=total-disc   
    }
    console.log('Final price:'+total+'Discount price:' +disc)
  }
else
{
    console.log('Discount is invalid. Final Price:' +total)
}
