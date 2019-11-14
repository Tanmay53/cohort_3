function filArr(arr1,val){
    var newarr=[]
    newarr =arr1.filter(function(element){
        return element >= val
})
console.log(newarr)
}
filArr([10,2,3,5,6,7,9],4)