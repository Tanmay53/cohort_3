function removeDuplicates(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = i+1; j < arr.length; j++){
            if(arr[i] == arr[j]){
                arr[j] = null;
            }
        }
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i] !== null){
            uniqueArr.push(arr[i])
        }
    }
    return console.log('the array with unique elements:', uniqueArr)
}
uniqueArr = []
array1 = [2, 2, 4 ,6 ,2 ,3]
removeDuplicates(array1)