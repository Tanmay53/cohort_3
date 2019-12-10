function subsetArray(arr1, arr2) {
    var obj1 = {}
    var obj2 = {}
    var flag = true

    //if arr1 length is greater than arr2 length 
    if (arr1.length > arr2.length) {
        return false;
    }
    //every null set is a subset 
    if (arr1.length == 0) {
        return true
    }
    for (var i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] = arr1[i]
    }
    for (var i = 0; i < arr2.length; i++) {
        obj2[arr2[i]] = arr2[i]
    }

    //loop to check if every element in obj1 is not present in obj2
    for (key in obj1) {
        if (!(key in obj2)) {
            flag = false;
        }
        else {
            flag = true
        }
    }
    return flag

}




console.log(subsetArray([1, 2, 3,], [1, 2, 3, 4, 5, 6]), count)



//  test cases covered 
// null ==> [],[1,2,3,4,5,6]
// true ==> [1,2,3],[1,2,3,4,5,6]
// false ==> [1,2,3,9],[1,2,3,4,5,6]

