
var c = 0
function subset(array1, array2) {
    for (i = 0; i < array1.length; i++) {
        for (j = 0; j< array2.length; j++) {
            if (array1[i] == array2[j]) {
                c++;
            }
        }
    }
    if (c == 0 ) {
        console.log("not subset")
    }
    else {
        console.log("subset")

    }
}
subset([4,5,6], [1,2,3])