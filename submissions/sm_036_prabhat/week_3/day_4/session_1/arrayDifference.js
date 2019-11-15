function arrayDiffrence(arr1, arr2) {
    var arr = [];

    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){ 
                console.log(arr1[i])
                arr1[i] = "@"
            } 
        }
        for(var i = 0; i < arr1.length; i++){
            if(arr1[i] != "@"){
                arr.push(arr1[i])
            }
        }
    }
    return arr;
}
console.log(arrayDiffrence([1, 5, 9, 2, 6], [1, 2, 4]))