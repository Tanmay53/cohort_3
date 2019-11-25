function average_divisible_while (limit,number){
var sum = 0;
var count = 0;
var avg = 0;
var i = 0;
while (i <= limit) {
    if (limit % number == 0) {
        sum += i;
        count += 1;
        i++;

    }
}
avg = sum / count;
console.log(avg)
}
average_divisible_while(40,4)


