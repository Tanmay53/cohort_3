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
arr2 = [6, 7, 8, 9, 10, 20]

//arr1 = [1, 1, 1, 1, 1]
//arr2 = [2, 2, 1, 1, 1]


//arr1 = []
//arr2 = [6, 20]


//arr1 = [1,2,3,4,5]
//arr2 = [60, 70, 80, 90]


//arr1 = [-1,2,-3,4,-5]
//arr2 = [0]



console.log(check_disjoint(arr1, arr2))


/*
--------------------------------Test Cases--------------------------
Input                                     Output
arr1 = [-1,2,-3,4,-5]
arr2 = [0]                                 true


arr1 = [1,2,3,4,5]
arr2 = [60, 70, 80, 90]                    true


arr1 = []
arr2 = [6, 20]                              true

arr1 = [1, 1, 1, 1, 1]
arr2 = [2, 2, 1, 1, 1]                      false


arr1 = [1,2,3,4,5]
arr2 = [6, 7, 8, 9, 10, 20]                 true

*/


