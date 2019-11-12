var customer = {
    name : "teja",
    status: "Platinum" ,   
}
var upda_status = "Premium" // status 

changeStatus (customer, upda_status) // calling the function

function changeStatus (customer, upda_status) //function
{
            if (customer.status =="") 
            {
                console.log("Invalid Input")
            }
            else 
            {
                customer.status = upda_status
            }

            if (customer.status == "Basic")
            {
                customer.credit_limit = 80000
            }
            else if (customer.status == "Premium")
            {
                customer.credit_limit = 300000
            }
            else if (customer.status == "Platinum")
            {
                customer.credit_limit = 600000
            }
         
  return customer          
}

console.log(customer)