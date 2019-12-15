function multiply(arr, target) {
    var arr= arr;
    var target= target || 2;
    var newArr= arr.map(function(n) {
        return (n*target)
    })
    console.log(newArr)
}
multiply([1, 5, 7, 6, 3, 2, 9], 10)