function checkSupersetArray(arr1, arr2) {
    var obj = {}, count = 0;
    arr1.forEach( function(ele) {
        obj[ele] = ele;
    })
    arr2.forEach(function(ele) {
        if(obj[ele] == ele)
            count++
    })
    if(count == arr2.length)
    {
        console.log(true)
    } 
    else{
       
        console.log("false")
    
    }
}

checkSupersetArray([1,2,3,4],[2,3,4])

