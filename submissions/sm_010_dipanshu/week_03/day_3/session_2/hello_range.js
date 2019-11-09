//function to print "Hello Masai" from 0 to given limit. It accepts limit as an argument.
function printThis(limit){

    //checking if limit is a positive value. Avoiding dirty inputs here.
    if(limit >= 0){
        
        //for-loop to iterate from 0 to limit
        for(var i = 0; i < limit; i++){
            console.log('Hello Masai')
        }
    }
    else{
        console.log('Limit is negative. Please enter a positive limit. You entered: ' + limit)
    }
}

printThis(10)   //invoking the function with limit as 10