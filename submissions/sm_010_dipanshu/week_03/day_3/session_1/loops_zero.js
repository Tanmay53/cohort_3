//funtion to print numbers from limit to 0 over console. It takes the limit as an argument
function numberPrinter(limit){

    //for-loop to print values. Notice the reversed iteration
    for(var i = limit; i >= 0; i--){

        console.log(i)          //print values over console
    }
}

numberPrinter(15)               //invoking the function with limit as 15