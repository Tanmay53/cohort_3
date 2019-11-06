var TotalAmount=250100;
var SavingsAmount=200000;
if(TotalAmount>1000000)
{    
    var Deduction=0.1*SavingsAmount;
      if(Deduction>=50000)
      {
         Deduction=50000;
      }
    var TaxableAmount=TotalAmount-Deduction;
    
      if (TaxableAmount>1000000)
        {    
        var TaxAmount=(TaxableAmount-1000000)*0.3+125000
        }
      else
        {
        TaxAmount=(TaxableAmount-500000)*0.2+25000;
        }
    var NetIncome=TotalAmount-TaxAmount;
    console.log('your Total tax deduction is:'+TaxAmount)
    console.log('your Total Income after tax deduction is:'+NetIncome)
    console.log('your cap deduction is:'+Deduction)
}
else if(TotalAmount>500000)
{   
         var Deduction=0.3*SavingsAmount;
            if(Deduction>=50000)
               {
                 Deduction=50000;
               }    
         var TaxableAmount=TotalAmount-0.3*SavingsAmount;
         if(TaxableAmount>500000)
        {
            var TaxAmount=(TaxableAmount-500000)*0.2+25000;
        }
        else
        {
            TaxAmount=(TaxableAmount-250000)*0.1
        }
        var NetIncome=TotalAmount-TaxAmount;
        console.log('your Total tax deduction is:'+TaxAmount)
        console.log('your Total Income after tax deduction is:'+NetIncome)
        console.log('your cap deduction is:'+Deduction)
        
}
else if(TotalAmount>250000)
{
    var TaxableAmount=TotalAmount-0.5*SavingsAmount;
    var Deduction=0.5*SavingsAmount;
      if(Deduction>=50000)
      {
         Deduction=50000;
      }
    if(TaxableAmount>250000)
        {
            var TaxAmount=(TaxableAmount-250000)*0.1;
        }
        else
        {
            TaxAmount=0;
        }
    var NetIncome=TotalAmount-TaxAmount;
    console.log('your Total tax deduction is:'+TaxAmount)
    console.log('your Total Income after tax deduction is:'+NetIncome)
    console.log('your cap deduction is:'+Deduction)
}
else
{
    console.log('your Total tax deduction is 0')
    console.log('your Total Income is:'+TotalAmount)
}