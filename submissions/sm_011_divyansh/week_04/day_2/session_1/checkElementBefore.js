function calculate(arr){
   var sum=arr.map(function(ele){
       return Number(ele.split(" ")[1])
   }).reduce(function(a,b){
       return a+b
   })
    console.log(sum)
    return sum
}

calculate(['a 10','b 20'])
