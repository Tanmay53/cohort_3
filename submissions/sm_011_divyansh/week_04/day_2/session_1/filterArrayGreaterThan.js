function filterArrayGreaterThan(arr, target) {
    var newarr= arr.filter(function(val) {
        return val<target

    })
    console.log(newarr)
    return newarr;
}
filterArrayGreaterThan([1,2,3,4,5,6,7,8], 6)