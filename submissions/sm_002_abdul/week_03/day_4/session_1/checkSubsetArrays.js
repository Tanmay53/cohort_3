function checkSubsetArrays(array1,array2){
    var isSubset=true;

    for (var i=0;i<array1.length;i++){
        if (array2.indexOf(array1[i])===-1){
            isSubset=false;
            return isSubset;
        }
    }
    return isSubset; 
}

console.log(checkSubsetArrays([1,2,3],[1,2,3,4,5,6]))