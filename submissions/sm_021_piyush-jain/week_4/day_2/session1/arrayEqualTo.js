var arr=[2,3,4,5,6,1,1,2,3,7,8,9,10]
 //function definition
function arrayEqualTo(arr,target){
    var arr1=[]
      for(var i=0;i<arr.length;i++)
      {
           if(arr[i]!=target)
           arr1.push(arr[i])           
      }
    var arr2 = arr1.map(function(element){
         return element*element
      })
      return arr2
}
//function call
var arr1=arrayEqualTo(arr,1)
console.log(arr1)