function arrayEqualto(arr, value) {
    var array = arr.map(function(arr) {
        return arr * value
    })

    console.log(array)
}
arrayEqualto([9, 7, 5, 9], 12)