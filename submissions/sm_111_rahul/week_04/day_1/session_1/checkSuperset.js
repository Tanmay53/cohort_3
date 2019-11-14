arr1 = [4, 5, 8, 9, 7, 10]
arr2 = [4,8]
function checkSuperset(array1, array2){
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


if(keylength == size1){
    console.log('superset')
}else{
    console.log('Not superset')

}
}
checkSuperset(arr1, arr2)