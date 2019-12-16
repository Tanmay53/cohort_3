function checkSuperset(arr1, arr2) {
    var count = 0
    for(var i = 0; i < arr2.length; i++){
        for(var j = 0; j < arr1.length; j++){
            if(arr2[i] == arr1[j]){
                count ++
                break
            }
        }
    }
    if(count == arr2.length){
        console.log("Array 1 is the superset of Array 2")
    }
    else{
        console.log("Array 1 is NOT the superset of Array 2")
    }    
}

checkSuperset(['1', '2', '3', '5', '6'], ['1', '5', '6'])
checkSuperset([1, 2, 3], [1, 5, 6, 2, 4, 3])

// Checked for a true and false superset
