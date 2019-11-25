sum = 0;
count = 0;
//function to print average of all the numbers divisible by given number
function average(number,limit) {
  for (i = 1; i <= limit; i++) { 
    while (i % number == 0) {
      sum = sum + i;
      count = count + 1  
      break;
    }
    average = sum / count;
  }
  return average;
}
//calling the function 
average(3,20);
console.log(average);
