function evenSum(numbers) {
    numbers = numbers || [ 2, 3, 1, 5, 9, 14, 12 ];
    var sum = 0;
    var i= 0;
    var num= numbers.sort(function(a, b){return a-b});
    // console.log(num)
    // console.log(typeof(num[2]))
    for (i = 0; i < num.length; i++) {
        if (num[i] % 2 == 0) {
            sum += num[i]
             console.log(num[i])
        }
    }
    console.log(sum)
}
evenSum()