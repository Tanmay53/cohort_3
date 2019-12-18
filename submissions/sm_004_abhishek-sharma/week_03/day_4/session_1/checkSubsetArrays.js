function checkSubset(arr1, arr2) {
    var count = 0
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                count ++
                break
            }
        }
    }
    if(count == arr1.length){
        console.log("Array 1 is the subset of Array 2")
    }
    else{
        console.log("Array 1 is NOT the subset of Array 2")
    }
    
}
// Checked for a true and false subset
checkSubset(['1', '2', '3'], ['1', '5', '6'])
checkSubset([1, 2, 3], [1, 5, 6, 2, 4, 3])
