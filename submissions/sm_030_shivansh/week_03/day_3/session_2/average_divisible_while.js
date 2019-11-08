// to find the average of all numbers from 0 to num1 which  are divible by number num2 using while loop

function avgDivisible(num1, num2) {

  var sum = 0;
  var count = 0;
  var i = 0;

  if (num2 === 0)
    console.log('Divisibility by  zero not possible, given another num2');

  else {

    var i = 0;

    while (i <= num1) {

      if (i % num2 === 0) {
        sum += i;
        count++;
      }

      i++;
    }

  }

  return sum / count;
}

console.log(avgDivisible(10, 2));

//Input num1,num2 -- 10,2  20,3  10,0
