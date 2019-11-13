function comparison(arr1, arr2){
    var arr = []
    for(var i = 0; i < arr1.length; i++){
        var flag = 0
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                flag++
                break
            }
        }
        if(flag == 0)
            arr.push(arr1[i])
    }
    return arr
}

function symmetricDifference(arr1, arr2) {
    var arr =  []
    arr.push(comparison(arr1, arr2))
    arr.push(comparison(arr2, arr1))
    return arr
}

var result = console.log(symmetricDifference([1, 2, 6, 5, 10, 25], [45, 3, 25, 7, 6]))

// *Long Method*
// function symmetricDifference(arr1, arr2) {
//     var arr = []
//     for(var i = 0; i < arr1.length; i++){
//         var flag = 0
//         for(var j = 0; j < arr2.length; j++){
//             if(arr1[i] == arr2[j]){
//                 flag++
//                 break
//             }
//         }
//         if(flag == 0)
//             arr.push(arr1[i])
//     }
//     for(var i = 0; i < arr2.length; i++){
//         var flag = 0
//         for(var j = 0; j < arr1.length; j++){
//             if(arr2[i] == arr1[j]){
//                 flag++
//                 break
//             }
//         }
//         if(flag == 0)
//             arr.push(arr2[i])
//     }
//     return arr  
// }

// var result = console.log(symmetricDifference([1, 2, 6, 5, 10, 25], [45, 3, 25, 7, 6]))