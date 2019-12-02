var arr1 = [1, 2, 3, 4, 5]
var arr2 = [1, 2, 3, 4, 6, 7, 8]
var count = 0
function checkSubsetArrays(arr1, arr2) {
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                count = count + 1;
            }
        }
    }
    if (count == arr1.length) {
        console.log('arr1 is the subset of arr2')
    }
    else {
        console.log('arr1 is not the subset of arr2')
    }
}
checkSubsetArrays(arr1 = [1, 2, 3, 4, 5], arr2 = [1, 2, 3, 4, 5, 6, 7, 8])
