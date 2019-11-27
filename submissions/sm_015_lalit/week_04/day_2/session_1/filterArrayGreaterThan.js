function filterArrayGreaterThan(arr,target){
    var work=arr.filter(function(x){
        if (x<target){
            return x
        }
    })
    console.log(work)
}
filterArrayGreaterThan([2,5,4,6,5,1],4)