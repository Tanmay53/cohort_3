function removeDuplicatesArraysObject(arr1){
    var arr = [];

    for(var i = 0; i < arr1.length-1; i++){
        for(var j = i+1; j < arr1.length; j++){
            if(arr1[i] == arr1[j]){
                // console.log(arr1[i]);
                arr1[j] = "#";
            }
        }
    }
    for (var i = 0; i < arr1.length-1; i++){
        if(arr1[i] != "#"){
            arr.push(arr1[i]);
        }
    }
    return arr;
}

var obj = {
    arr1 : [5, 3, 4, 4, 4, 3, 2, 7, 8, 8],
}
console.log(removeDuplicatesArraysObject(obj.arr1));