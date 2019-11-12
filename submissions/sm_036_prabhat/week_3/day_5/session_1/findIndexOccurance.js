function findIndexOccurance(arr1, num){
    var arr = [];
    for(var i = 0; i < arr1.length; i++){
        if(arr1[i] == num){
            arr.push(i);
        }
    }
    if(arr.length == 0){
        return -1
    }
    else{
        return arr;
    }
}
var arr1 = [5,2,3,5,6,8];
console.log(findIndexOccurance(arr1 ,9))