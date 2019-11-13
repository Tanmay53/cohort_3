function sum(arr,target){
    var sum=arr.filter(function(element){
                    return element>target
                }).reduce(function(accmulator,currValue){
                        return accmulator+currValue
                },0)
    return sum
}

var arr=[10,20,30,1,20]
console.log(sum(arr,10))