function arrayDifference(firstArray,secondArray){
    var differenceArray=[];
    for (i=0;i<firstArray.length;i++){
        if (secondArray.indexOf(firstArray[i])===-1){
            differenceArray.push(firstArray[i]);
        }
    }
    console.log(differenceArray)
}
arrayDifference([5,6,7,8],[3,4,1,2])