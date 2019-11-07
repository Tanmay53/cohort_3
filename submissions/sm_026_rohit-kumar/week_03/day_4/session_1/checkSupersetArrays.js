/*
Same code written for previous question

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

// uses check_subset function
function check_superset(arr1, arr2) {
    return check_subset(arr2, arr1)
}



// main

var arr1 = [1, 2, 3, 5, 6, 7] 
var arr2 = [1, 2, 3, 4]

console.log(check_superset(arr1, arr2))