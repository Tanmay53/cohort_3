function avgDoWhile (limit, div) {
    var i = 1;
    var sum = 0;
    var count = 0;
    var avg = 0;

    while ( i <= limit) {
        if(i % div == 0){
            sum += i; 
            count ++;
        }
        i++;
    }
    avg = sum / count ;
    return avg;
}

console.log(avgDoWhile(55,7));