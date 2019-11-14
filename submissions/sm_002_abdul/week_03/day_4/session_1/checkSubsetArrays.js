function checkSubsetArrays(firstArray,secondArray){
    if (secondArray.length>=firstArray.length){
        subsetArray=[]
        for (j=0;j<secondArray.length;j++){
            for (i=0;i<firstArray.length;i++){
                if (firstArray[i]===secondArray[j]){
                    subsetArray[subsetArray.length]=firstArray[i] 
                }
            }
        }
        console.log(subsetArray)
        
    }
    // return false
}

checkSubsetArrays([1,2,3,4],[1,2,3,4,5,6,7,8])