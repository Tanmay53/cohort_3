//function to print numbers from 0 to given limit. It takes limit as an argument.
function printNumber(limit){

    //checking to see if limit is porsitive or negative
    if(limit >= 0){
        printPositives(limit)   //invoking function printPositives if limit is positive
    }
    else{
        printNegatives(limit)   //invoking function printNegatives if limit is negative
    }

    //function to print postive numbers from 0 to given limit. Takes posLimit as an argument.
    function printPositives(posLimit){
        for(var i = 0; i <= posLimit; i++){
            console.log(i)
        }
    }
    
    //function to print negative numbers from 0 to given limit. Takes negLimit as an argument.
    function printNegatives(negLimit){

        //reversing the for-loop to print negative numbers.
        for(var i = 0; i >= negLimit; i--){
            console.log(i)
        }
    }
}

printNumber(10)    //invoking the function with limit as 10