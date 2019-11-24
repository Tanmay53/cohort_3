// var arr1 = [1,2,3,4,5]
// var arr2 = [1,2,3,4,5,6,6,7,7,8]
// var arr = [];
// var opt = [];
// var cnt = 0 ;
// for(var i=0; i<arr1.length;i++ ){
//     arr.push(arr1[i])
// }
// for(var i=0; i<arr2.length;i++ ){
//     arr.push(arr2[i])
// }

// for(var i=0; i<arr.length;i++ ){
//     for(var j=0; j < opt.length;j++){
//         if(arr[i] == opt[j]){
//             cnt = 1;
//             break;
//         }
//     }
//     if(cnt == 0){
//         opt.push(arr[i])
//     }
//     cnt = 0; 
// }
// console.log(opt)
// console.log(arr)




var arr1 = [1,2,2,3,44,5,6,6,7]
var arr2 = [1,2,9,99,9,6,6,6,44,4444,555]
var opt = [];
function unionArrays(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        var cnt = true;
        for (var j = 0; j < opt.length; j++) {
            if (arr1[i] == opt[j]) {
                cnt = false;
                break;
            }
        }
        if (cnt = true) {
            opt.push(arr1[i])
        }
    }
    for (var i = 0; i < arr2.length; i++) {
        var cnt = 1;
        for (var j = 0; j < opt.length; j++) {
            if (arr2[i] == opt[j]) {
                cnt = 0;
                break;
            }
        }
        if (cnt == 1) {
            opt.push(arr2[i])
        }

    }
    console.log(opt)
}
unionArrays([1,2,2,3,44,5,6,6,7],[1,2,9,99,9,6,6,6,44,4444,555])