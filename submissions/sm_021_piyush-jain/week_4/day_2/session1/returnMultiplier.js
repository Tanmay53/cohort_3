var arr=[2,3,4,5,6,1,1,2,3,7,8,9,10]

//function definition

function Multiplier(array,target){
  var arr1=array.map(function(element){
            return element*target
    })
    console.log(arr1)
}
//function call
Multiplier(arr,10)