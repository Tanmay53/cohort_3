function arrCompare(arr1, arr2) {
    count = 0
    for (i = 0; i < arr2.length; i++) {
        id1 = arr2[i]
        for (j = 0; j < arr1.length; j++) {
            id2 = arr1[j]
            if (id1 == id2) {
                count++
            }
        }
    }
    if (count == arr2.length) {
        console.log("1st array is a superset of 2nd array")
    } else {
        console.log("1st array is not a superset of 2nd array")
    }

}

arrCompare(["1", "8", "3", "6", "5", "2"],["3", "2", "1"])  //Test case when 1st array is a subset of 2nd array
arrCompare(["3", "2", "1","4"],["9", "8", "7", "6", "1", "2"],)  //Test case when 1st array is not a subset of 2nd array
