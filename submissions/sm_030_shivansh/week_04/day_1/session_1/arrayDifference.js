
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

// function to find the array difference of arr1 from aar2


function arrayDiffernce(arr1, arr2) {

    var arrayDiff = [];

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
                arrayDiff.push(arr1[i]);
            // break;





        }

    }


    return arrayDiff;
}

console.log(arrayDiffernce([1, 2, 3], [1, 2, 6, 7]));
console.log(arrayDiffernce([9, 2, 1, 6, 5, 7], [1, 2, 6, 7, 1, 1, 6]));
console.log(arrayDiffernce([1, 2, 3, 4, 5], [6, 7, 8, 9]));
console.log(arrayDiffernce([1, 1, 2, 2], [1, 1, 2, 2]));
console.log(arrayDiffernce([1, 2, 6, 7, 1, 1, 6], [9, 2, 1, 6, 5, 7]));


