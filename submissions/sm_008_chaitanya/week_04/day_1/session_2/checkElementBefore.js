function checkElementBefore(arr) {
    var result = arr.map(function (currentElement, currentIndex, arr) {
        if (arr[currentIndex - 1] > currentElement) {
            return -1
        }
        else {
            return 1
        }
    })
    return result
}
var arr = [1, 2, 3, 1, 5, 2, 8]
console.log(checkElementBefore(arr))