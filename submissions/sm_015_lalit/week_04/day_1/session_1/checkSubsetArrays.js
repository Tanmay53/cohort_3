function checkSubsetArraysObj(arr1,arr2){
    n1=arr1.length
    n2=arr2.length
    obj=[]
    count=0
    result="False"
    arr2.forEach(function(x){
        obj[x]=x
    })
    arr1.forEach(function(x){
        if(obj[x]){
            count++
        }
    })
    if (count==n1){
        result="True"
    }
    console.log(result)
}
checkSubsetArraysObj([6,5,4,8,9,7,5,2],[6,5,4,8,9,7,5,2,6,0,2])