var arr1 = [10, 20, 30, 40, 50]
var arr2 = [10, 20, 80]
var count = 0
function checkSupersetArrays(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[j] == arr2[i]) {
                count = count + 1;
            }
        }
    }
    if (count == arr2.length) {
        console.log('arr1 is a superset of arr2')
    }
    else {
        console.log('arr1 is not the superset of arr2')
    }
}
checkSupersetArrays(arr1 = [10, 20, 30, 40, 50], arr2 = [10, 20, 80])