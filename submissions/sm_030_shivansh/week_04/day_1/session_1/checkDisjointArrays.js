// function to check whether the given two arrays are disjoint or not

function checkDisjointArrays(arr1, arr2) {

    for (var i = 0; i < arr1.length; i++) {

        for (var j = 0; j < arr2.length; j++) {

            if (arr1[i] === arr2[j]) {
                return "Array have some common element";

            }

        }

    }
    return "Array are Disjoint";
}

console.log(checkDisjointArrays([1, 2, 3, 4, 5, 'shivansh'], [9, -1, 'shivansh']));

//Input - 1, 2, 3, 4, 5],      [9, 1]
//Input - 1, 2, 3, 4, 5],      [9, 7]