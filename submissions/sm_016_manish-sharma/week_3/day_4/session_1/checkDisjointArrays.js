function checkDisjointArrays(array1,array2){
    var count=0
    for (i=0;i<array1.length;i++){
        for(j=0;j<array2.length;j++){
            if(array1[i]!=array2[j]){
                count=count+0
            }
            else{
                count=count+1
            }
        }
    }
    if (count==0){
        console.log(array1,"and",array2,"are disjoint arrays")
    }
    else{
        console.log(array1,"and",array2,"are not disjoint arrays")
    }


}

checkDisjointArrays(['d','b'],['g','w','a','c'])
checkDisjointArrays(['d','w'],['g','w','a','c'])