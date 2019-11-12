function arrayEqual(arr,target){
    var newArr=arr.filter(function(element){
        return element==target
    })
    return newArr
}
var arr=[10,20,30,1,20]
console.log(arrayEqual(arr,20))