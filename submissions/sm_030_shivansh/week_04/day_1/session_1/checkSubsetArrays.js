// to check whether first array is subset of second array
function checkSubsetArrays(arr1, arr2) {

    if (arr1.length > arr2.length)
        return "First Array is not subset of Second Array"

    else {
        for (var i = 0; i < arr1.length; i++) {

            for (var j = 0; j < arr2.length; j++) {

                if (arr1[i] === arr2[j])
                    break;

                else if (j !== arr2.length - 1)
                    continue;

                else
                    return "First Array is not subset of Second Array"
            }
        }
        return "First Array is subset of Second Array"
    }

}

//function to make first array  smaller than second array

/** function callingCheck(arr1, arr2) {

    if (arr1.length < arr2.length)
        return checkSubsetArrays(arr1, arr2);

    else
        return checkSubsetArrays(arr2, arr1);

} **/



console.log(checkSubsetArrays([1, 9], [1, 2, 3, 4]));
console.log(checkSubsetArrays([1, 9, 4, 5], [1, 4]));
console.log(checkSubsetArrays([1, 4], [1, 9, 4, 5]));
// Input:  [1, 9], [1, 2, 3, 4]