function findIndexPos(arr, a) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == a) {
            return i + 1
        }
    }
    return -1
}
console.log(findIndexPos([9, 4, 5, 7, 7, 2, 6, 3, 4, 6], 1))