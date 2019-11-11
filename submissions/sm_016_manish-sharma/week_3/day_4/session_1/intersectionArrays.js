function intersectionArrays(array1,array2){
    var arrInt=[]
    for (i=0;i<array2.length;i++){
        array1.push(array2[i])
    }
    for (i=0;i<array1.length;i++){
        if((array1.indexOf(array1[i],i+1))!= -1){
            arrInt.push(array1[i])
        }
    }
    console.log(arrInt)
}

intersectionArrays(['2','3','4','5','6'],['1','2','3'])