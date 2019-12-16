function squareElements(arr) {
    result = arr.map(function(val) {
        return val*val;
    })
    console.log(result)
    return result
}
squareElements([1,2,3,4,5,6,7,8,9,10])
