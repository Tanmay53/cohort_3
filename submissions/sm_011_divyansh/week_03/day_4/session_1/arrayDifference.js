function arrayDifference(arr1, arr2) {
    for (var i = 0; i <= arr1.length-1; i++) {
        for (var j = 0; j <= arr2.length-1; j++) {
            if (arr1[i] ==arr2[j]) {
                arr1.splice(i, 1);
            }
        }
    }
    console.log(arr1);
    return arr1;
}

arrayDifference([1,2,2,3],[7,8,3])
