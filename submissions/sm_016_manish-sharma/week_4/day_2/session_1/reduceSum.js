function reduceSum(arr,k){
    var pq= arr.filter((e)=> e>k).reduce((a,e)=> a+e)
    console.log(pq)
}

reduceSum([1,2,3,4,5,3,7,3],3)