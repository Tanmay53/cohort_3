function printEven (limit) {
    for (var i = 0; i <= limit; i++) {
        if(i % 2 == 0){
            console.log(i); 
        }
    }
    return i;
}
console.log(printEven(10))