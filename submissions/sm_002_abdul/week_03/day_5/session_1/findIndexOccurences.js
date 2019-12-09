function indexOccurence(arr,num){
    var indexPositionsArray=[];
    for (var i=0;i<arr.length;i++){
        if (arr[i]===num){
            indexPositionsArray.push(i)
        }
    }
    console.log(indexPositionsArray)
}
indexOccurence([1,2,3,1,1,1,2],1)