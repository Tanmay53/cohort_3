var TotalAmount=2000000;
var SavingsAmount=500000;

if(TotalAmount>1000000)
{
    var TaxableAmount=TotalAmount-0.1*SavingsAmount;
    var Rebate=0.1*SavingsAmount*0.3;
    if (Rebate>50000)
    {    var AdditionalTax=Rebate-50000;
        if(AdditionalTax>0)
            {
               var RebateAmount=50000;
            }
        else
            {
               var RebateAmount=Rebate;
            }
    }
    else
    {
        var AdditionalTax=0;
        var RebateAmount=Rebate;
    }
    var TaxAmount=(TaxableAmount-1000000)*0.3+125000+AdditionalTax;
    var NetIncome=TotalAmount-TaxAmount;
    console.log('your Total tax deduction is:'+TaxAmount)
    console.log('your Total Income after tax deduction is:'+NetIncome)
    console.log('your Total rebate in tax deduction by saving amount is:'+RebateAmount)
}
else if(TotalAmount>500000)
{
        var TaxableAmount=TotalAmount-0.3*SavingsAmount;
        var Rebate=0.2*SavingsAmount*0.3;
        var TaxAmount=(TaxableAmount-500000)*0.2+25000;
        var NetIncome=TotalAmount-TaxAmount;
        console.log('your Total tax deduction is:'+TaxAmount)
        console.log('your Total Income after tax deduction is:'+NetIncome)
        console.log('your Total rebate in tax deduction by saving amount is:'+Rebate)
}
else if(TotalAmount>250000)
{
    var TaxableAmount=TotalAmount-0.5*SavingsAmount;
    var Rebate=0.1*SavingsAmount*0.5;
    var TaxAmount=(TaxableAmount-250000)*0.1+AdditionalTax;
    var NetIncome=TotalAmount-TaxAmount;
    console.log('your Total tax deduction is:'+TaxAmount)
    console.log('your Total Income after tax deduction is:'+NetIncome)
    console.log('your Total rebate in tax deduction by saving amount is:'+Rebate)
}
else
{
    console.log('your Total tax deduction is 0')
    console.log('your Total Income is:'+TotalAmount)
}