var income = 900000
var save = 200000
var rebate
var tax

if (income < 500000)
  {
    rebate = 0.5 * save;
    if(rebate < 50000)
      {
        income = income-rebate;
      }
    else {
           income -= 50000;
    }

    if (income > 250000)
      {
        tax = 0.1 * income;
        console.log("Tax you have to pay :"+ tax )
      }
    else {
      console.log("no tax")
    }

  }
else if  (income <= 1000000)
  {
    debate = 0.3 * save;

    if (debate < 50000)
      {
        income = income - debate;

      }
    else {
      income = income-50000;

    }

      if (income >500000 && income <= 1000000)
        {
          tax = 0.2 * income;
          console.log ("Tax you have to pay :"+ tax)
        }
      else if (income <= 500000 && income > 250000)
      {
        tax = 0.1 * income;

        console.log ("Tax you have to pay :"+tax)
      }
     else {
      console.log("no tax")
    }
  }
else if ( income > 1000000)
  {
    rebate = 0.1 * save;

      if (rebate < 50000)
        {
          income = income - rebate;

        }
      else
        {
          income = - 50000
        }
   if (income > 1000000)
      {
        tax = 0.3 * income;
        console.log ("Tax you have to pay :"+ tax)
      }
    else if (income >500000 && income <= 1000000)
        {
          tax = 0.2 * income;
          console.log ("Tax you have to pay :"+ tax)
        }
    else if ( income <= 500000 && income > 250000)
      {
        tax = 0.1 * income ;
         console.log ("Tax you have to pay :"+tax)
      }
    else
      {
        console.log ("No tax")
      }

  }

