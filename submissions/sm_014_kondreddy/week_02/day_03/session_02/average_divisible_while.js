var i = 1;
sum = 0;
count = 0;
var avg ;
var num = 2;
while (i <= 10) {
    if (i % num == 0) {
        // console.log(num)
    sum = sum + i;
    count = count+1;
    }
    i = i +1;

}
avg = sum/count;
console.log(avg)