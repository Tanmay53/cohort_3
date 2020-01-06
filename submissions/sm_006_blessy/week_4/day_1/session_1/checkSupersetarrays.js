function checkSuperset(arr1,arr2){
    var obj ={}
    flag = false;

    for(var i = 0; i<arr1.length; i++){
        obj[arr1[i]] = 0;
    }
for(var j = 0; j<arr2.length; j++){
    if(obj[arr1[i]] !== obj[arr2[j]]){
        flag = true;

    }
    else flag = false

}
    if(flag){
        console.log("superset")
    }
    else console.log("not a superset")

}
checkSuperset([1,2,3,4,5,6,7,8,9],[1,11])