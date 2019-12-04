
var c = 0
function disjoint(array1, array2) {
    for (i = 0; i < array1.length; i++) {
        for (j = 0; j< array2.length; j++) {
            // console.log(array1[i], array2[j])
            if (array1[i] == array2[j]) {
                c++;
            }

        }
    }
    if (c !== 0) {
        console.log("Not disjoint")
    }
    else {
        console.log("disjoint")

    }
}
disjoint([1, 2], [1, 2, 3])


