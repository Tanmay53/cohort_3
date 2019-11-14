var arr=[{item:10},{item:20},{item:30},{item:40},{item:50}]
//function definition
function reduce(arr){
  var arr1= arr.reduce(function(element,index){
               return element+index.item
    },0)
    console.log(arr1)
}
//function call
reduce(arr)