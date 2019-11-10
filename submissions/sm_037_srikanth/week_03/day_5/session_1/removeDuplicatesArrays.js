var array=[1,2,3,4,5,3,2,1];
var duplicate=function (arr){
    var finalArray = [];
    var sort_array= arr.sort();
    for (i=0;i< arr.length;i++){
        if(arr[i+1] !== arr[i]){
         finalArray.push(arr[i])
        }
    }
    return finalArray;
}
   console.log(duplicate(array));