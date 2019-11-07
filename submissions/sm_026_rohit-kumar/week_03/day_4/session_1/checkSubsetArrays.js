
/*
found keeps track of elememt from first loop
found in second loop or not
*/
function check_subset(arr1, arr2) {
    var found

    for(var i = 0; i < arr1.length; i++) {
        found = false
        for(var j = 0; j < arr2.length; j++) {
            if(arr1[i] == arr2[j]) {
                found = true
            }
        }
        if(found == false)
            return false
        
    }
    return true
}


// main
arr1 = [1, 2, 3, 4]
arr2 = [1, 2, 3, 4, 5, 6]

console.log(check_subset(arr1, arr2))
