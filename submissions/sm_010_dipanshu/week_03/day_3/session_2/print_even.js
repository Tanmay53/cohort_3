//function to print even numbers from 0 to given limit. It takes limit as an argument.
function printEven(limit){

    //checking to see if limit is porsitive or negative
    if(limit >= 0){
        printPositiveEven(limit)   //invoking function printPositiveEven if limit is positive
    }
    else{
        printNegativeEven(limit)   //invoking function printNegativeEven if limit is negative
    }

    //function to print postive even numbers from 0 to given limit. Takes posLimit as an argument.
    function printPositiveEven(posLimit){
        for(var i = 0; i <= posLimit; i++){
            if(i % 2 == 0){
                console.log(i)
            }
        }
    }
    
    //function to print negative even numbers from 0 to given limit. Takes negLimit as an argument.
    function printNegativeEven(negLimit){

        //reversing the for-loop to print negative numbers.
        for(var i = 0; i >= negLimit; i--){
            if(i % 2 == 0){
                console.log(i)
            }
        }
    }
}

printEven(10)    //invoking the function with limit as 10