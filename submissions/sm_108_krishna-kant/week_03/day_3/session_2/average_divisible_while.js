var limit = 50;
var givenNumber = 4;
var divisible = [];

// Find divisible
function findDivisble() {
  var i = 0;
  while (i <= limit) {
    if (i % 5 == 0) {
      divisible.push(i);
    }
    i++;
  }
}

// Find Average
function findAverage(args) {
  var sumOfArray = 0;
  var j = 0;
  while (j < args.length) {
    sumOfArray += args[j];
    j++;
  }
  var average = sumOfArray / args.length;
  console.log(average);
}

findDivisble();
findAverage(divisible);
