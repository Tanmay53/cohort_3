var limit = 35
function printEvens() {
    for(var i = 1; i <= limit; i++){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}

printEvens()