// function to print even numbers in a given range
function print_evens(limit){
    for(var i = 0; i <= limit; i++ ){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}

// code execution starts here
var limit = 50
print_evens(limit)