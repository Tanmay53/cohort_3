var arr = [1, 2, 3, 5, 4, 5, 6]
var output = [];
var counter = 0
function removeDuplicatesArray(arr){
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < output.length; j++) {
        if (arr[i] == output[j]) {
            counter = 1
        }
    }
    if (!counter) {
        output.push(arr[i])
    }
    counter = 0
    // console.log(output)
}
console.log(output)
return output
}
removeDuplicatesArray(arr)
