function sumEven (arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0) {
            sum += arr[i];
        }
    }
    return sum;
}
var arr = [5,10,14,8,10];
console.log(sumEven(arr))