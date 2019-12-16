function arrayEqual(arr, target) {
    newarr = arr.filter(function (ele) {
        return ele != target
    })
    var result=newarr.map(function (ele) {
        return ele * ele
    })
    console.log(result)
    return result
}

arrayEqual([1, 2, 3, 4,5,6], 4)