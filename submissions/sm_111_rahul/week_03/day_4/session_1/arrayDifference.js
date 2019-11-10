var diff = []
var intersection = []
var arrayDiff = []
function arrayDifference(arr1, arr2){

    for(var i = 0; i < arr1.length; i++){
            diff.push(arr1[i])
    }
    
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                intersection.push(arr1[i])
            }
        }
    }
    for(var i = 0; i < intersection.length; i++){
        for( var j = 0; j < diff.length; j++){
            if(intersection[i] == diff[j]){
                diff[j] = null;
            }
        }
    }
    for(var i = 0; i < diff.length; i++){
        if(diff[i] !== null){
            arrayDiff.push(diff[i])
        }
    }
   return arrayDiff 
   
}
array1 = [4, 6, 8, 10]
array2 = [1, 4 , 8 , 7, 9]
console.log('array diff. is ', arrayDifference(array1, array2))
