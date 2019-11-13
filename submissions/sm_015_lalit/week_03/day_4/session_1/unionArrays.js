
function unionArray(arr1,arr2) {
    for (i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i])
    }
    var input = arr2
    unionArray = []
    len = input.length
    for (i = 0; i < len; i++) {
        if (unionArray.indexOf(input[i]) === -1) {
            unionArray.push(input[i])
        }

    }
    console.log(unionArray)
}

unionArray([3, 8, 1, 5, 3],[6, 5, 4, 2, 8, 9])