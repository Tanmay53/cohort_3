function findIndexPos(arr1, gvalue) {
    var len = arr1.length
    reqArray=[-1]
    for (i = 0; i < len; i++) {
        if (arr1[i] == gvalue) {
            reqArray.push(i);

        }
    }
    if(reqArray!=-1){
    reqArray.shift()}

    console.log(reqArray)
}
findIndexPos([3, 5, 8, 1, 1, 1, 8, 4, 8], 8)