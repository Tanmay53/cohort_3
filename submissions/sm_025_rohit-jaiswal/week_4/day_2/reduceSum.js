function sum(array, target) {
    var newArray = array.filter(function(element, index) {
        return element > 50000
    }).reduce(function(sum, index) {
        return sum += index
    }, 10000)
    console.log(newArray)
}
sum([9, 4, 5, 7, 7, 26346], 1)