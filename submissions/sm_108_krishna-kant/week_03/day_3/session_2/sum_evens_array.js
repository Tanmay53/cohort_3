var numbers = [2, 5, 6, 4, 7, 19, 0, 18, 19, 20, 30, 8];
var sumOfEven = 0;

function sumEven(args) {
  for (var i = 0; i < args.length; i++) {
    if (!isNaN(args[i])) {
      if (args[i] % 2 == 0) {
        sumOfEven += args[i];
      }
    }
  }
  console.log("Sum of Even Numbers is " + sumOfEven);
}

sumEven(numbers);
