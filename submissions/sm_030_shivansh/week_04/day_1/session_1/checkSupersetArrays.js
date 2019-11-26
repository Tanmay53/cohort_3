// to check whether first array is superset of second array
function checkSupersetArrays(arr1, arr2) {

    if (arr1.length < arr2.length)
        return "First Array is not superset of Second Array"

    else {
        for (var i = 0; i < arr2.length; i++) {

            for (var j = 0; j < arr1.length; j++) {

                if (arr2[i] === arr1[j])
                    break;

                else if (j !== arr1.length - 1)
                    continue;

                else
                    return "First Array is not superset of Second Array"
            }
        }
        return "First Array is superset of Second Array"
    }

}

//function to make first array  smaller than second array

/** function callingCheck(arr1, arr2) {

    if (arr1.length < arr2.length)
        return checkSubsetArrays(arr1, arr2);

    else
        return checkSubsetArrays(arr2, arr1);

} **/



console.log(checkSupersetArrays([1, 9], [1, 2, 3, 4]));
console.log(checkSupersetArrays([1, 9, 4, 5], [1, 4]));
console.log(checkSupersetArrays([1, 4], [1, 9, 4, 5]));
// Input:  [1, 9], [1, 2, 3, 4]