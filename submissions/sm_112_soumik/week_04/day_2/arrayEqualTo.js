function arrEq(arr1,val){
    arr2=[]
    arr1=arr1.filter(function(element){
        return element!= val
    })
    arr2 = arr1.map(function(element){
        return element*element
    })
    console.log(arr2)
}
arrEq([2,4,6,7,5,3],3)