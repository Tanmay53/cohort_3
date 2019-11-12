function filterArray(arr,target){
    var newArr=arr.filter(function(element){
        return element<target
    })
    return newArr
}
var arr=[10,20,30,1,2]
console.log(filterArray(arr,20))