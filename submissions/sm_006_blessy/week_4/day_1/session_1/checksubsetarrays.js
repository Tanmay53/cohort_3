function checksubsetarrays(arr1,arr2){
    obj={}
    var flag = false
    for(var i = 0; i<arr1.length; i++){
        obj[arr1[i]] = 0;

    }
    for(var i = 0; i<arr2.length; i++){

    if(obj[arr1[i]] !== obj[arr2[i]]){
    flag = true
    }
    }
if(flag){
    console.log("not a subset")
}
else console.log("subset")
}
checksubsetarrays([1,2,3,11,12],[1,2,3,4,5,6,7,8,9])