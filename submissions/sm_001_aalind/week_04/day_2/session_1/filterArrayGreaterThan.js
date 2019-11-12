function filterArrayGreaterThan(arr, target) {
    return arr.filter(function(val) {
        if(val < target) {
            return true;
        }
    })

    return arr;
}

console.log(filterArrayGreaterThan([1,2,3,10], 4))