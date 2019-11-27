function arrayDiffObj(arr1,arr2){
obj={}
reqArr=[]
arr1.forEach(function(x){
    obj[x]=x
})
arr2.forEach(function(x){
    if (obj[x]==undefined){
        reqArr.push(x)
    }
})
console.log(reqArr)
}
arrayDiffObj([6,5,4,8,9,7,5,2,6,0,2],[6,5,4,8,9,7,5,2,6,5,8,7,4,5,12])