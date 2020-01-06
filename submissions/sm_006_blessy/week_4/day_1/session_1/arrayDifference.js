function arrayDifference(arr1,arr2,arr){
    var obj ={
     arr:"",
}
    for (var i =0 ; i<arr1.length; i++){
        obj[arr1[i]] = arr2.length;
    
    for(var j = 0; j<arr2.length; j++){

   // obj[arr2[j]] = arr2[j];
    if(obj[arr1[i]] !== obj[arr2[j]]){
        obj[arr1[i]]--
    }
    }
    if(obj[arr1[i]] == 0){
console.log(arr1[i])

    }
    for(key in obj){
        if(obj[key] === arr1[i])
       //obj[key] = obj[key]+1
    console.log(obj[key])
    }
}
}
return arrayDifference([1,2,3,4,5,6],[5,6,7,8,9,10,11])