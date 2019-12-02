function arraySymmetricDifference(firstArray,SecondArray){
    var unionArray=[];
    var intersectionArray=[];
    var symmetricDifferenceArray=[];
    for (i=0;i<firstArray.length;i++){
        for (j=0;j<SecondArray.length;j++){
            if (firstArray[i]===SecondArray[j]){
                intersectionArray.push(firstArray[i]);
            }
        }
    }
    var unionArray=firstArray
    for (k=0;k<SecondArray.length;k++){
        if (unionArray.indexOf(SecondArray[k])===-1){
            unionArray.push(SecondArray[k])
        }
    }
    
    for (var l=0;l<unionArray.length;l++){
        if (intersectionArray.indexOf(unionArray[l])===-1){
            symmetricDifferenceArray.push(unionArray[l]);
        }
    }
    return symmetricDifferenceArray;
}
console.log(arraySymmetricDifference([7,8,5,6],[5,6,1,2]));