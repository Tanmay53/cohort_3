function interSectioOfArray(arr1, arr2) {
    var arr = [];
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                // console.log(arr1[i]);
                arr.push(arr1[i])
            }
        }
    }
    return arr;
}
console.log(interSectioOfArray([1, 5, 9, 2, 6, 8, 7, 4], [1, 5, 2, 4]))