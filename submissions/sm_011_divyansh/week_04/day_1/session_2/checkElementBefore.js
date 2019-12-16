function checkEleBefore(arr) {
    var prev = arr[0]
    var Array = arr.map(function(ele) 
    {
        if (prev > ele) {
            prev = ele
            return -1

        }
        else{
            prev=ele
            return 1
        }

    })
    return Array
}

checkEleBefore([1,2,3,4,5,1,2])