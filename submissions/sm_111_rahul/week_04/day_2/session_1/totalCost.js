function totalCost(arr){
    newArr = arr.reduce(function (acc, curr){
        //  if(index % 2 == 1)
         return typeof(curr)==='string'? acc : acc + curr
    },0)
    console.log(newArr)
}
totalCost(['Mango',60,'Apple',100,'Banana',40])