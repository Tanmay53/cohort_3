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

// function to find intersection of two arrays

function intersectionArrays(arr1, arr2) {

    var interArray = [];

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j]) {

                interArray.push(arr1[i]);
                // arr2.splice(i, 1);  
                arr2 = removeElement(j, arr2);      // to remove this element from arr2
                break;
            }

        }
    }

    return interArray;
}

console.log(intersectionArrays([1, 2, 3], [1, 2, 6, 7]));
console.log(intersectionArrays([1, 2, 1, 6, 7], [1, 2, 6, 7, 1, 1, 6, 1, 2]));