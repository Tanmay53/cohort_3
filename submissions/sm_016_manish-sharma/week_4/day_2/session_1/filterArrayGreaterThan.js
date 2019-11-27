function filterArrayGreaterThan(arr,t){
    var filtered= arr.filter((e) => e>t)
    console.log(filtered)
}

filterArrayGreaterThan([1,2,3,4,5,6,7,8],3)