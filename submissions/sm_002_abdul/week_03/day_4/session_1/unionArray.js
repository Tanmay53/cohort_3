function unionArray(firstArray,secondArray){
    for (var i=0;i<secondArray.length;i++){
        if (firstArray.indexOf(secondArray[i])===-1){
            firstArray.push(secondArray[i]);
        }
    }
    return firstArray
}

console.log(unionArray([1,2,3,4,5],[5,6,8,9,2]))