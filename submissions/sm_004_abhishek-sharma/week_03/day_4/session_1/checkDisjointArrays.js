function checkDisjoint(arr1, arr2) {
    var count = 0
    var arr1Length = arr1.length
    var arr2Length = arr2.length
    for(var i = 0; i < arr1Length; i++){
        for(var j = 0; j < arr2Length; j++){
            if(arr1[i] == arr2[j]){
                count ++
                break
            }
        }
    }
    if(count == 0)
        console.log("Array 1 & Array 2 are disjoint sets")
    else
        console.log("Array 1 & Array 2 are NOT disjoint sets")
    
}

checkDisjoint(['1', '2', '3'], ['1', '5', '6'])
checkDisjoint([1, 2, 3], [5, 6])

// Checked for a true and false disjoint set by taking numbers and strings
