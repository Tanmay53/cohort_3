// Print the average of all the numbers from 0 to the given limit that are divisible by the given number (HINT: User while)

function averageDivisibleUsingWhileLoop(limit, num){
var i = 0
var avgAdd = 0
var count =0
 
while(i<=limit){
 if(i%num == 0){
  avgAdd += i;
  count += 1;
 }
 i++
}
// console.log(avgAdd)

average = avgAdd/count
console.log(average)

}

averageDivisibleUsingWhileLoop(10, 4)

//averageDivisibleUsingWhileLoop(100, 3)
//averageDivisibleUsingWhileLoop(111, 4)
//averageDivisibleUsingWhileLoop(60, 8)
