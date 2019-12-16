function arraydiff(arr1, arr2) {
    var obj = {}, arrdiff = [];
    arr2.forEach(function (val) {
        obj[val] = val;
    })
    arr1.forEach(function (val) {
        if (obj[val] != val){
            arrdiff.push(val)
        }
    })
    return arrdiff
   

}

var diff=arraydiff([1, 2, 3, 4, 5,], [1, 2, 8, 9])
console.log(diff)