function disarrObj(arr1,arr2){
    result="True"
    obj=[]
    arr1.forEach(function(x){
        obj[x]=x
    })
    arr2.forEach(function(x){
        if (obj[x]){
            result="False"
        }
    })
    console.log(result)
}
disarrObj([1,2,5,4,7,8,9],[6,5,4,8,9,7,5,2])