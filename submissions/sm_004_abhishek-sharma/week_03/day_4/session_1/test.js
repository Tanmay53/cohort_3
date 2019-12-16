// function comparison(arr1, arr2){
//     var str = "", str1 = ""
//     for(var i = 0; i < arr1.length; i++){
//         var flag = 0
//         for(var j = 0; j < arr2.length; j++){
//             if(arr1[i] == arr2[j]){
//                 flag++
//                 break
//             }
//         }
//         if(flag == 0)
//             str += arr1[i]
//     }
//     str1 = str.split(" ")
//     return str1
// }

// function symmetricDifference(arr1, arr2) {
//     var arr =  []
//     arr.push(comparison(arr1, arr2))
//     // arr += ","
//     arr.push(comparison(arr2, arr1))
//     return arr
// }

// var result = console.log(symmetricDifference([1, 2, 6, 5, 10, 25], [45, 3, 25, 7, 6]))

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
    return (arr.join())
}

var result = console.log(symmetricDifference([1, 2, 6, 5, 10, 25], [45, 3, 25, 7, 6]))

