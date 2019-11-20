function unionOfArray(arr1, arr2) {
    var arr = [];
    var output = [];
    var cnt = 0;
    for (var i = 0; i < arr1.length; i++) {
        arr.push(arr1[i])
    }
    for (var j = 0; j < arr2.length; j++) {
        arr.push(arr2[j])
    }

    for (var i = 1; i < arr.length; i++) {
        for (var j = 0; j < output.length; j++) {
            if (arr[i] == output[j]) {
                cnt = 1;
                break;
            }
        }
        if (cnt == 0) {
            output.push(arr[i]);
        }
        cnt = 0;
    }
    return output;
}
console.log(unionOfArray([1, 5, 9, 2, 6], [1, 2, 4]))