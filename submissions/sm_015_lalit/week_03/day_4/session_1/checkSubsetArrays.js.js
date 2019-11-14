function arrCompare(arr1, arr2) {
    count = 0
    for (i = 0; i < arr1.length; i++) {
        id1 = arr1[i]
        for (j = 0; j < arr2.length; j++) {
            id2 = arr2[j]
            if (id1 == id2) {
                count++
            }
        }
    }
    if (count == arr1.length) {
        console.log("1st array is a subset of 2nd array")
    } else {
        console.log("1st array is not a subset of 2nd array")
    }

}

arrCompare(["3", "2", "1"],["1", "8", "3", "6", "5", "2"])  //Test case when 1st array is a subset of 2nd array
arrCompare(["3", "2", "1","4"],["9", "8", "7", "6", "1", "2"],)  //Test case when 1st array is not a subset of 2nd array
