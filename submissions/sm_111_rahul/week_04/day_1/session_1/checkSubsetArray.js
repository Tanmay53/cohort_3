arr1 = [7, 5]
arr2 = [3, 4, 6, 8]
function checkSubset(array1, array2){
    var obj = {};
    size1 = array1.length;
    size2 = array2.length;
    for(var i = 0; i < size1 || i < size2; i++){
        if(i < size1)
        obj[array1[i]] = null;
        if(i < size2)
        obj[array2[i]] = null;
    }

        
    

var keylength = Object.keys(obj).length


if(keylength == size2){
    console.log('Subset')
}else{
    console.log('Not subset')

}
}

checkSubset(arr1, arr2)