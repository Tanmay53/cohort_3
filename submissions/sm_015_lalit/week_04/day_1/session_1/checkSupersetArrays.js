function checkSupersetArraysObj(arr1,arr2){
    n1=arr1.length
    n2=arr2.length
    obj={}
    count=0
    result="False"
    arr1.forEach(function(x){
        obj[x]=x
    })
    arr2.forEach(function(x){
        if(obj[x]){
            count++
        }
    })
    if (count==n2){
        result="True"
    }
    console.log(result)
}
checkSupersetArraysObj([6,5,4,8,9,7,5,2,6,0,2],[6,5,4,8,9,7,5,2])