function intersectionarrObj(arr1,arr2){
    obj={}
    result=[]
    arr1.forEach(function(x){
        obj[x]=x
    })
    arr2.forEach(function(x){
        if (obj[x]){
            result.push(x)
        }
    })
    console.log(result);
}
intersectionarrObj([1,2,5,4,7,8,9],[6,5,4,8,9,7,5,2])
