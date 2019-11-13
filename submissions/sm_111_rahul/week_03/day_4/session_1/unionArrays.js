function unionArray(arr1, arr2){
    var unionArr = [];
    var temp = [];
    for(i = 0; i < arr1.length; i++){
        unionArr.push(arr1[i]);
    
    }
    for(i = 0; i < arr2.length; i++){
        unionArr.push(arr2[i]);
    }

    for(i = 0; i < unionArr.length - 1; i++){
        for(j = i+1; j < unionArr.length; j++){
            if(unionArr[i] == unionArr[j]){
                unionArr[j] = null;
            }
    }
}
    console.log(unionArr)

    for(i = 0; i < unionArr.length; i++) {
        if(unionArr[i] !== null)
        temp.push(unionArr[i]) 
    }  
    
    return temp
 }


array1 = [1, 0, 5, 8, 9, 3]
array2 = [1, 3, 4]
console.log('Union of arrays: ', unionArray(array1, array2))

/* Test Cases
    array1 = [1, 4, 6, 8]
    array2 = [1, 3, 5] 
    

    */