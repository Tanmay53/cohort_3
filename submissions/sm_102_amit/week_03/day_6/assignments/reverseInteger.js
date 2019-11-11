// function to reverse a integer
function reverseInteger(input) {
  var temp = "";
  var digit = "";
  var number = input;
  var length = input.toString().length;
  for (var i = 0; i < length; i++) {
    digit = number % 10;
    temp += digit;
    number = Math.floor(number / 10);
    console.log(number);
  }

  return temp;
}

// input
var input = 10023600;
// output
console.log(reverseInteger(input));
