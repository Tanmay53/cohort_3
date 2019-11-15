function disjointArray(arr1, arr2) {

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                console.log(arr1[i]);
                return false;
                break;
            }
        }
    }
    return true;
}

console.log(disjointArray([1, 2], [1, 4]))