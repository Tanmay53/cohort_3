sum = 0;
number = 20;
count = 0;
//function to print average of all the numbers divisible by given numbers 
function average(number) {
  for (i = 1; i <= number; i++) {
    if (i % 2 == 0) {
      // console.log(i)
      sum = sum + i;
      count = count + 1;
      // console.log(sum)
      average = sum / count;
      // console.log(average)
    }
  }
  return average;
}
average(20);
console.log(average);
