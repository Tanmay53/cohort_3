function intersectionArrays(arr1, arr2) {
    var obj1 = {}
    var obj2 = {}
    var res = []
    for (var i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] = arr1[i]
    }
    for (var i = 0; i < arr2.length; i++) {
        obj2[arr2[i]] = arr2[i]
    }
//for every key in obj1 matching with obj2 push the result in array and break
    for (key in obj1) {
        for (key in obj2)
            res.push(key);
        break;
    }
    return res

}

console.log(intersectionArrays([1, 2, 3, 4], [1, 2, 3]))