var cost =200 
var discount
var total

if(cost > 300)
    {
     discount = 0.1 * cost ;
      if (discount <100)
        {
          total = cost - discount;
          console.log ("Final price:"+ cost +",Discount price:"+ total )
        }
      else 
        {
          total = cost;
        } 
  }
else {
  console.log("Discount is Invalid. Final price:"+ cost )
}
