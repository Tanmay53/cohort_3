function findIndexPos(arr1, gvalue) {
    var len = arr1.length
    reqIndex = -1
    for (i = 0; i < len; i++) {
        if (arr1[i] == gvalue) {
            reqIndex = i;
            break;
        }
    }
    console.log(reqIndex)
}
findIndexPos([3, 5, 8, 1, 1, 1, 8, 4, 8], 8)