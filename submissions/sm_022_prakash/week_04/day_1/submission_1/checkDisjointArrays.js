
function disjoint(arr1, arr2) {
    var obj1 = {}
    var obj2 = {}
    for (var i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] = arr1[i]
    }
    for (var j = 0; j < arr2.length; j++) {
        obj2[arr2[j]] = arr2[j]
    }
    var flag = true
    for (keys in obj1) { //for in loop on object1 
        if (keys in obj2) { // checking if the key in obj1 exists in obj2
            flag = false; //set the flag to false if keys matches
            break;
        }
    }
    return flag
}

console.log(disjoint([1, 2, 3], [5, 6, 7, 8, 9, 10]))