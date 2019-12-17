function union(arr1,arr2) {
    var obj = {};
    arr1.forEach(function(ele) {
        obj[ele] = ele;
    })
    arr2.forEach(function(ele) {
        obj[ele] = ele;
    })
    console.log(obj)
    return obj
}

union([1,2,3,4,5,5], [1,2,2,3,4,5,6,7])

