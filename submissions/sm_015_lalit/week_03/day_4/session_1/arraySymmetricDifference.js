function arraySyDiff(arr1, arr2) {
    var arrayD1 = []
    for (i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) == -1) {
            arrayD1.push(arr1[i])
        }
    }
    var arrayD2 = []
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            arrayD2.push(arr2[i])
        }
    }
    for (i = 0; i < arrayD1.length; i++) {
        arrayD2.push(arrayD1[i])
    }
    console.log(arrayD2)
}

arraySyDiff([3, 8, 1, 5, 3], [6, 5, 4, 2, 8, 9])