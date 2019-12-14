
function supersetArrays(arr1, arr2) {
    var obj1 = {}
    var obj2 = {}
    let flag = true

    for (var i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] = arr1[i];
    }
    for (var i = 0; i < arr2.length; i++) {
        obj2[arr2[i]] = arr2[i];
    }
    if (arr1.length < arr2.length) {
        flag = false
    }
    for (key in obj2) {
        if (key in obj1) {
            flag = true;
        }
        else {
            flag = false;
        }
    }
    return flag
}

console.log(supersetArrays([1, 2, 3,4], [1, 2, 3]))

//check the logic again=== wrong logic 

// function supersetArrays(arr1, arr2) {
//     var obj = {}
//     var flag = true
//     if (arr1.length < arr2.length) {
//         flag = false;
//     }
//     for (var i = 0; i < arr1.length; i++) {
//         obj[arr1[i]] = arr1[i];
//     }






/// check it here...




//     for (var i = 0; i < arr2.length; i++) {
//         for (key in obj) {
//             if (arr2[i] === Number(key)) {
//                 flag = true
//             }
//             else {
//                 flag = false
//             }
//         }

//     }
//     return flag

// }