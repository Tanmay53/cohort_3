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
    if (count > 0) {
        console.log("Arrays are not disjoint")
    } else {
        console.log("Arrays are disjoint")
    }

}

arrCompare(["9", "8", "7", "6", "5", "4"], ["3", "2", "1"])  //Test case of disjoint array
arrCompare(["9", "8", "7", "6", "1", "2"], ["3", "2", "1"])  //Test case of not disjoint array
