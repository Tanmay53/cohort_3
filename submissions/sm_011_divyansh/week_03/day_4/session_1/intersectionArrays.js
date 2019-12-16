function intersection(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                result.push(arr1[i]);
            }
        }
    }
    console.log(result)
}


intersection([1,2,3,4,5],[2,6,7])