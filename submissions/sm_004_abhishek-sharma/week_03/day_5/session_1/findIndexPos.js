function findIndex(arr, val) {
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == val){
            return i+1
        }
    }
    return -1
}

console.log(findIndex([1, 2, 3, 2, 5, 4, 1, 9, 1, 45, 23, 9, 45, 99, 99], 45))
console.log(findIndex([1, 2, 3, 2, 5, 4, 1, 9, 1, 45, 23, 9, 45, 99, 99], 15))
