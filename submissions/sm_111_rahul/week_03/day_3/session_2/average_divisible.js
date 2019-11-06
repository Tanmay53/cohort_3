
var sum = 0, count = 0;
for(var i = 0 ; i < 25; i++){
    if(i % 5 == 0){
        sum = sum + i;
        count++;
    }
}
console.log('The average is :' + (sum/count))
