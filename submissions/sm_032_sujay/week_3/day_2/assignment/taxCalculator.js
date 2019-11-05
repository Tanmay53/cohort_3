var amountEarned=260000
var savingsAmount=0
var rebate1=50000
var tax2=0,tax1=0,tax3=0
var IncomeTax

if(amountEarned<250000)
{
    console.log('Not yet eligible for Income tax, study @ masai school and get 6lpa job')
}
else
{
if((amountEarned>250000)&&(amountEarned<500000))
{
    tax1=(0.1*(amountEarned-250000))
    rebate=(0.5*savingsAmount)
}
else if((amountEarned>500000)&&(amountEarned<1000000))
{
    tax2=(0.2*(amountEarned-500000))
    rebate=(0.3*savingsAmount)
}
else if(amountEarned>1000000)
{
    tax3=(0.3*(amountEarned-1000000))
    rebate=(0.1*savingsAmount)
    if(rebate>50000)
    {
        rebate=rebate1
    }
}

tax=tax1+tax2+tax3
IncomeTax=tax-rebate
console.log('The Income Tax based on the Income and savings is',IncomeTax)
}