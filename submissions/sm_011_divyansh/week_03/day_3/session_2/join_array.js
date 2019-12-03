function joinArr(arr,char) {
    var arr1=arr[0]
    for (var i = 1; i < arr.length; i++) {
        arr1= arr1 + char+ arr[i];
        
    }
    console.log(arr1);
    
}   

joinArr(['d', 'i', 'v', '1', '9', 'ltd'], "+")