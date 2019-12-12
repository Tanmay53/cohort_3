function checkElementBefore(arr) {
    var inpt = arr.map(function(ele) {
        if (arr.length - 1 > ele) {
            return -1
        } else {
            return 1
        }
    })
    return inpt
}

var arr = [5, 6, 2, 25, 55, 5, 8]
console.log(checkElementBefore(arr))