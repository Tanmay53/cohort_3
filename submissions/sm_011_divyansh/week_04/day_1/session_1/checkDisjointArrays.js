function disjoint(arr1, arr2) {
    var obj = {}, count = 0;
    arr1.forEach(function(key) {
        obj[key] = key
    })
    arr2.forEach( function(key) {
        if( obj[key] == key){
            count++
        } else 
            null
    })
    if( count > 0)
    {
    console.log(true)
        return false
    }
    else{

        console.log(false)
        return false
    }
}

disjoint([1,2,3,4], [3,5,6,7])
