function removeDuplicates(arr2){
    var arr1 = []
    for(var i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) == -1){
            arr1.push(arr2[i])
        }
    }
    return arr1
}
console.log(removeDuplicates([1, 1, 2, 4, 7, 6, 8, 9, 9]))
