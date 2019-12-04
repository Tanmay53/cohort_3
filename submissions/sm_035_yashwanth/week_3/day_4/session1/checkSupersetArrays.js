var c = 0
function superset(array1, array2) {
    for (i = 0; i < array1.length; i++) {
        for (j = 0; j< array2.length; j++) {
            if (array1[i] == array2[j]) {
                c++
            }
        }
    }
    if (c == array2.length ) {
        console.log("superset")
    }
    else {
        console.log("not superset")

    }
    console.log(c)
}

superset([1,2,3,4,5], [1,2,3,5])