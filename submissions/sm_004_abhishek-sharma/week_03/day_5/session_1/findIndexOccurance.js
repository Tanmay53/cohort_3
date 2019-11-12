function findIndexPos(arr, val) {
    var pos = [], count = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == val){
            pos.push(i+1)
            count++
        }
    }
    if(count == 0)
        return -1
    else
        return pos
}
console.log(findIndexPos([1, 2, 3, 2, 5, 4, 1, 9, 1, 45, 23, 9, 45, 99, 99], 1))
console.log(findIndexPos([1, 2, 3, 2, 5, 4, 1, 9, 1, 45, 23, 9, 45, 99, 99], 15))
