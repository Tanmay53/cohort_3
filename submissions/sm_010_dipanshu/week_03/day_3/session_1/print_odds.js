//function to print odd values from 0 to limit over console. It takes limit as an argument
function printOdd(limit){

    //for-loop that iterates to limit
    for(var i = 0; i <= limit; i++){

        //checking to see if the number is odd
        if(i % 2 == 1){
            console.log(i)      //printing over console
        }
    }
}

printOdd(30)                    //invoking the function with limit as 30