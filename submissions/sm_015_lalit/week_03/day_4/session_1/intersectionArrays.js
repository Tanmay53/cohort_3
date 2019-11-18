function intersectionArray(arr1, arr2) {
    var input = []
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                input.push(arr1[i])
            }

        }

    }
    intersectionArray = []
    len = input.length
    for (i = 0; i < len; i++) {
        if (intersectionArray.indexOf(input[i]) === -1) {
            intersectionArray.push(input[i])
        }

    }
    console.log(intersectionArray)
}

intersectionArray([3, 8, 1, 5, 5, 3], [6, 5, 4, 2, 8, 8, 9])