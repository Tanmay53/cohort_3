var intersectionArr = []

function intersection(arr1, arr2){
    for(var i = 0; i < arr1.length; i++){
        for(var j =0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                intersectionArr.push(arr1[i]);
            }
        }
    }
    return console.log('The intesection of two arrays is: ', intersectionArr)
}
array1 = [2 , 4, 8 ,10]
array2 = [1 , 4 , 7 , 10]

intersection(array1, array2)