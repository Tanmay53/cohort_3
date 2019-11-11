//function to remove element at a particular index

function removeElement(j, arr2) {

    var arrNew = [];
    for (var i = 0; i < arr2.length; i++) {

        if (i != j)
            arrNew.push(arr2[i]);
        else
            continue;
    }
    return arrNew;
}

// to add any remaining element from arr2

function addRemaining(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++)
        arr1.push(arr2[i]);


    return arr1;
}
// function to find Union of two arrays

function unionArrays(arr1, arr2) {

    var unionArray = [];

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j]) {

                unionArray.push(arr1[i]);
                // arr2.splice(i, 1);        // to remove this element from arr2
                arr2 = removeElement(j, arr2);
                break;
            }

            else {
                unionArray.push(arr1[i]);
                break;

            }

            // console.log(unionArray);
        }

    }
    // to add any remaining element from arr2
    unionArray = addRemaining(unionArray, arr2)

    return unionArray;
}

console.log(unionArrays([1, 2, 3], [1, 2, 6, 7]));
console.log(unionArrays([9, 9, 7, 1, 2, 1, 6], [1, 2, 6, 7, 1, 1, 6]));