function reduceSum(arr, target) {
   newarr = arr.filter(function (ele) {
      return ele > target
   })
   var sum=newarr.reduce(function (a, c) {
      return a + c;
   })
   console.log(sum)
   return sum
}

reduceSum([10,20,30,40,5,6],6)