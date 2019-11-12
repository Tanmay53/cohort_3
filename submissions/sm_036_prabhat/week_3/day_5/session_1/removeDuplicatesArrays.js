function removeDuplicatesArrays(arr1){
    var arr = [];
    // var cnt = ;
    for(var i = 0; i < arr1.length-1; i++){
        for(var j = i+1; j < arr1.length; j++){
        if(arr1[i] == arr1[j]){ 
            // console.log(arr1[i])
            arr1[j] ="@"
            } 
        }
    }
    for(var i = 0; i < arr1.length-1; i++){
        if(arr1[i] != "@"){
            arr.push(arr1[i])
        }
    }
    return arr;
}
console.log(removeDuplicatesArrays([5, 3, 4, 4, 3, 2, 7]))