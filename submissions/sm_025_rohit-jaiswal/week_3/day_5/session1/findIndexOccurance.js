function findIndexPos(arr, a) {
    var axr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == a) {
            axr.push(i + 1)
        }
    }

    return axr
}

console.log(findIndexPos([9, 4, 5, 7, 7, 7, 2, 6, 3, 4, 6], 7))