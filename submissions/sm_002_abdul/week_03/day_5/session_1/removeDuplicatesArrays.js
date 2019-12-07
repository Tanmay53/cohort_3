function removeDuplicates(arr){

    var uniqueArray=[];
    for (var i=0;i<arr.length;i++){
        if (arr.indexOf(arr[i])===i){
            uniqueArray.push(arr[i])
        }
    }

    return uniqueArray
}

console.log(removeDuplicates([1,2,1,1,1,3,4,2,2,2,]))