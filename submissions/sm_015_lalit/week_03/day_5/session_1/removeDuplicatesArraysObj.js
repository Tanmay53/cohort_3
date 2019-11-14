function removeDuplicatesArraysObj(arr1) {
    opObj = {}
    len = arr1.length
    for (i = 0; i < len; i++) {
        opObj[arr1[i]] = i
    }
    console.log(Object.keys(opObj))
}
removeDuplicatesArraysObj([3, 5, 8, 1, 1, 1, 8, 4, 8])