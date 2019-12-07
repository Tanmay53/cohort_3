// var arr1 = [9, 1, 2, 3, 4, 5, 9]
// var arr2 = [9, 1, 9, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8]
// var arr = []
// var count = 0

// for (var i = 0; i < arr1.length; i++) {
//     for (var j = 0; j < arr2.length; j++) {
//         if (arr1[i] != arr2[j]) {
//             count = 1
//         }

//     }
//     if (count == 1) {
//         arr.push(arr1[i])
//         count = 0
//     }
// }
//         }
//         else{
//             count = 0
//         }

//     }
//     if (count==1){
//         arr.push(arr1[i])
//         count = 0
//     }
// }

// console.log(arr)

// var arr1 = [1,2,3,4,5,9]
// var arr2 = [1,2,2,3,4,5,6,6,7,7,8]
// var arr = []
// var opt = []
// var cnt = 0
// // function intersectionArray(arr1, arr2){
// for(var i = 0 ; i<arr1.length; i++){
//     for(var j = 0; j<arr2.length; j++){
//         if(arr1[i]==arr2[j]){
//            arr.push(arr1[i]) 
//         }
//     }
// }
// console.log(arr)
// for(var i=0; i<arr.length;i++ ){
//     for(var j=0; j < arr1.length;j++){
//         if(arr[i] == arr1[j]){
//             cnt = 1;
//             break;
//         }

//     else if(cnt == 0){
//         opt.push(arr1[i])
//     }
//     cnt = 0; 
// }
// }
// console.log(opt)
// return(opt)
// }


var arr1 = [1, 2, 3, 4, 5, 9]
var arr2 = [1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8,9]
var arr = [];
var opt = [];
var cnt = 0;
function arrayDifference(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        arr.push(arr1[i])
    }
    for (var i = 0; i < arr2.length; i++) {
        arr.push(arr2[i])
    }

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr[i] == arr2[j]) {
                cnt = 1;
                break;
            }
        }
        if (cnt == 0) {
            opt.push(arr[i])
        }
        cnt = 0;
    }
    return opt
}
console.log(arrayDifference(arr1, arr2))