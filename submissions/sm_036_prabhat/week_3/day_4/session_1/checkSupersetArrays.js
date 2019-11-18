function subSetArray(arr1, arr2) {
    var count = 0;
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                // console.log(arr1[i]);
                count++;
            }
        }
    }

    if (arr1.length == count) {
        console.log("B Super set of A");
    }
    else if (arr2.length == count) {
        console.log("A Super set of B");
    }
    else {
        console.log("Not a Super Set !!!");
    }
}
subSetArray([1, 5, 9, 2], [1, 8, 5, 2, 9])