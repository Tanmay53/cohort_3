function countDuplicates(arr, target) {
    var count = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            count += 1
        }
    }
    return { "target": target, "count": count }
}
var arr = [2, 1, 5, 4, 2, 8, 2, 6, 2, 4, 2, 3, 0, 2]
var target = 2
console.log(countDuplicates(arr, target))