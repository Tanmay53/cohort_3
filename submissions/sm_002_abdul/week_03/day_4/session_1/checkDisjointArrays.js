function checkDisjointArrays(array1,array2){
    
    for (i=0;i<array1.length;i++){
        for (j=0; j<array2.length;j++){
            if (array1[i]===array2[j]){
                return false
            }
        }
    }
    return true
}

console.log(checkDisjointArrays([1,2,3,4,5],[9,8,7,6]))
