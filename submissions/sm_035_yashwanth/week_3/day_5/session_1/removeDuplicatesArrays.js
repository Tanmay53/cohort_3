
var result = []
function duplicate(arr) {
    for (i = 0; i < arr.length; i++) {
        flag = true
        for (j = 0; j < result.length; j++) {
            if (arr[i] == result[j]) {
                flag = false
                break;
            }
        }
        if (flag == true)
            result.push(arr[i])
    }
    console.log(result)
}
duplicate([1, 2, 3, 4, 4])