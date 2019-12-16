function filterArray(arr, target) {
    var arr = arr;
    var target = target;
    var l = arr.length;
    var newArr = [];
    newArr = arr.filter(function (element, index) {
        return element > target
    })
    var sum= newArr.reduce(function(a,b) {
        return a+b
    })
    console.log(sum)
}
filterArray([2, 5, 8, 9, 7, 8, 45, 1, 6, 3, 4], 7)