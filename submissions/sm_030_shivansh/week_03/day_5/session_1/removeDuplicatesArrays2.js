
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

// function to remove  duplicates elements in an array

function removeDuplicatesArrays(arr) {
    var object1 = {
        remove: function () {
            for (var j = 0; j < arr.length; j++) {

                var ele = arr[j];

                for (var i = j + 1; i < arr.length; i++) {

                    if (ele === arr[i]) {
                        arr = removeElement(i, arr);
                        i--;
                    }
                }

            }
            return arr;
        }
    }
    return object1.remove();
}

console.log(removeDuplicatesArrays([1, 2, 1, 1, 2, 3, 3]));
console.log(removeDuplicatesArrays([5, 6, 6, 7, 1, 2, 1, 1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 8, 9]));