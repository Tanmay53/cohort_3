function findIndexOccurence(array,target){
    indexArray = []

    for(var i=0;i<array.length;i++){
        if(target === array[i]){
            indexArray.push(i)
        }
    }
    return indexArray
}


index = findIndexOccurence([1,2,3,2,4,1,5,1,9,4,9,5,1],12)
index = findIndexOccurence([1,2,3,2,4,1,5,1,9,4,9,5,1],1)

if(index.length != 0){
    console.log(index)
}
else{
    console.log(-1)
}