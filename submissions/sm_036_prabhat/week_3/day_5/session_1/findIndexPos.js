function findIndexPos(arr1, num){

    for(var i = 0; i < arr1.length; i++){
        if(arr1[i] == num ){
            // console.log(arr1[i])
            return i
        }
    }
    return -1;
}
var arr1 = [5,2,3,5,6,8];
console.log(findIndexPos(arr1, 3))