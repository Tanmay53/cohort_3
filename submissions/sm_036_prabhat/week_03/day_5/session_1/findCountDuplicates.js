function findCountDuplicates(arr1, arr2){
    var cnt = 0;
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                cnt ++;
            }
        }
    }
    return cnt;
}
var arr = {
    arr1: [5,6,8,9,2],
    arr2: [1,7,8,9,2]
}
console.log(findCountDuplicates(arr.arr1, arr.arr2))