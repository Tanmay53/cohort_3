function reduceSum(input1,k)
{
   var input1
   var k
   var result
   input1=input1.filter(function(ele)
   {
      return ele>k
   })
   result=input1.reduce(function(acc,ele)
   {
     return acc+ele
   },0)
   console.log(result)
}
reduceSum([1,2,3,4,5,6,7],5)