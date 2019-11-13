// Print the average of all the numbers from 0 to the given limit that are divisible by the given number

function averageDivisible(limit, num){

 var avgAdd = 0
 var count = 0
 var average = 0
 
 for(var i=0; i<=limit; i++ ){
  if(i%num==0){
  //  console.log(i)
   avgAdd += i;
   count += 1;
 } 
}
// console.log(count)
average = avgAdd/count
// console.log(avgAdd)
console.log(average)
}


averageDivisible(10, 4)

//averageDivisible(100, 66)
//averageDivisible(10, 4)