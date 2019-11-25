// to add any remaining element from arr2

function addRemaining(arr1, arr2) {
    for (var i = 0; i < arr2.length; i++)
        arr1.push(arr2[i]);


    return arr1;
}

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

// function to Symmetric Difference of two arrays

function arraySymmetricDiffernce(arr1, arr2) {

    var symDiff = [];

    for (var i = 0; i < arr1.length; i++) {
        // console.log(i);
        for (var j = 0; j < arr2.length; j++) {


            if (arr1[i] === arr2[j]) {


                arr2 = removeElement(j, arr2);   // to remove this element from arr2
                arr1 = removeElement(i, arr1);  // to remove this element from arr1

                i--;                      // adjusting the index after removing element
                break;

            }
            else if (j === arr2.length - 1)
                symDiff.push(arr1[i]);
            // break;





        }

    }
    // console.log("arr2", arr2);
    symDiff = addRemaining(symDiff, arr2);  //adding remaining uncommon element of arr2 to symDiff

    return symDiff;
}

console.log(arraySymmetricDiffernce([1, 2, 3], [1, 2, 6, 7]));
console.log(arraySymmetricDiffernce([9, 2, 1, 6, 5, 7], [1, 2, 6, 7, 1, 1, 6]));
console.log(arraySymmetricDiffernce([1, 2, 3, 4, 5], [6, 7, 8, 9]));
console.log(arraySymmetricDiffernce([1, 1, 2, 2], [1, 1, 2, 2]));


