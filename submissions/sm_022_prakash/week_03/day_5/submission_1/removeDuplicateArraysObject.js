var arr = [9, 1, 2, 3, 4, 5, 6, 6, 4, 9]
let obj = {}
// var ouput
function removeDuplicateArraObject(arr) {

    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = 1;
    }
    var output = Object.keys(obj);
    return output
}

console.log(removeDuplicateArraObject(arr))