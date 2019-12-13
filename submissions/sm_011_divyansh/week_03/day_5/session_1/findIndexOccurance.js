function findIndex(arr, val) {
    var counter = 0
    arr1 = [];
    for( var i =0; i < arr.length; i++) {
        if(val == arr[i]) {
            arr1.push(i);
            
            
        } else if(val!== arr[i]) {
            counter++
        }
    }
    if(counter == arr.length) {
        console.log('-1')
    } 
    else 
        console.log(arr1)
}
findIndex(['1','2','a','a','3','4'],'a')

