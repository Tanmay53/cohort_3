var limit = 50;
var givenNumber = 4;
var divisible = [];

// Find divisible
function findDivisble() {
  for (var i = 0; i <= limit; i++) {
    if (i % 5 == 0) {
      divisible.push(i);
    }
  }
}

// Find Average
function findAverage(args) {
  var sumOfArray = 0;
  for (var j = 0; j < args.length; j++) {
    sumOfArray += args[j];
  }
  var average = sumOfArray / args.length;
  console.log(average);
}

findDivisble();
findAverage(divisible);
