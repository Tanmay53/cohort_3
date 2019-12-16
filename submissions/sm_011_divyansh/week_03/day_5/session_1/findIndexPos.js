function findIndexPos(arr, val) {
    counter = 0;
    for( var i =0; i < arr.length; i++) {
        if(val == arr[i]) {
            console.log(i);
            break;
        } else if(val!= arr[i]) {
            counter++;
        }
    }
    if(counter == arr.length) {
        console.log('-1');
    }
}
findIndexPos(['1','2','a','b'],'e')
