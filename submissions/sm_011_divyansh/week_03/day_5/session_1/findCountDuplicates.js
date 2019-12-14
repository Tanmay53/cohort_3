function findCountDuplicates(object, target) {

    var counter = 0;
    var arr = object.arr;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            counter++
        }
    }
    console.log(counter)
    return counter;
}

findCountDuplicates({ arr: [1,1,2,3]}, 1)