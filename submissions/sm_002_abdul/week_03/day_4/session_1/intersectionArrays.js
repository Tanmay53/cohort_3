function intersectionArrays(firstArray,secondArray){
    var intersectionArray=[];
    for (var i=0;i<firstArray.length;i++){
        for (var j=0;j<secondArray.length;j++){
            if (firstArray[i]===secondArray[j]){
                intersectionArray.push(firstArray[i])
            }
        }
    }

    return intersectionArray;
}

console.log(intersectionArrays([1,2,3,4],[3,4,5,6]))