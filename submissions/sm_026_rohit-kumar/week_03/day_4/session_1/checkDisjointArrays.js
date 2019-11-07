// retuns true if no common element is two arrays

function check_disjoint(arr1, arr2) {
    for(var i = 0; i < arr1.length; i++) {
        for(var j = 0; j < arr2.length; j++) {
            if(arr1[i] == arr2[j]) {
                return false
            }
        }
    }

    return true
}



// main
arr1 = [1,2,3,4,5]
arr2 = [6,7,8,9, 10 ,20]

console.log(check_disjoint(arr1, arr2))


