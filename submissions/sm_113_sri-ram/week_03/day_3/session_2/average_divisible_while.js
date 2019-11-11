
var num = [2, 4, 6, 8, 10]
var length = num.length;
function avg_num() {
    sum = 0;
    i = 0;
    while (num < length) {
        sum += num[i];
        i++;
    }
    average = sum / length;
    console.log('Average=' + average)
}

avg_num();