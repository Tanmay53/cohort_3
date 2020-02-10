function filterArrayGreaterThan(arr, value) {
    var filteredArray = arr.filter(function(ele, value) {
        return ele > 4
    })
    return filteredArray
}
console.log(filterArrayGreaterThan([9, 7, 5, 9, 9, 5, 4, 9, 5, 4, 9, 4, 5, 7, 7, 2, 6, 3, 4, 6], 4))