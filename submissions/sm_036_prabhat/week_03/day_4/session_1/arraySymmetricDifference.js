function arrayDiffrence(arr1, arr2) {
    var arr = [];
    var diff = [];

    for (var i = 0; i < arr1.length; i++) {
        arr[arr1[i]] = true;
    }
    for (var i = 0; i < arr2.length; i++) {
        if(arr[arr2[i]]){
            delete arr[arr2[i]]
        }
        else{
            arr[arr2[i]] = true;
        }
    }
        for (var cnt in arr) {
            diff.push(cnt);
        }
    return diff;
}
console.log(arrayDiffrence([1, 5, 9, 2, 6], [1, 2, 4]))