function checkSubsetArrays(array1,array2){
    var count=0
    for (i=0;i<array1.length;i++){
        for(j=0;j<array2.length;j++){
            if(array1[i]==array2[j]){
                count++
            }
            else{
                count=count+0
            }
        }
    }
    if (count==array1.length){
        console.log(array1,"is a subset of",array2)
    }
    else{
        console.log(array1,"is not a subset of",array2)
    }

}

checkSubsetArrays(['g','a'],['g','w','a','c'])
checkSubsetArrays(['f','a'],['g','w','a','c'])