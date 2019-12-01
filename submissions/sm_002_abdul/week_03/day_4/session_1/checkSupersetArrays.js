function checkSupersetArrays(supersetArray,subsetArray){
    var isSuperset=true;
    for (var i=0;i<subsetArray.length;i++){
        if (supersetArray.indexOf(subsetArray[i])===-1){
            isSuperset=false;
            return isSuperset;
        }
    }
    return isSuperset;
}

console.log(checkSupersetArrays([1,2,3,4,5,6],[1,2,3]))   