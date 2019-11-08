var a=1

// function to print even numbers till the given limit

function evens(a){
    if (a>1){
        for(i=2;i<=a;i+=2){
            console.log(i)
        }
    }
    else{
        console.log('Not valid')
    }
    
}

evens(a)        // function call