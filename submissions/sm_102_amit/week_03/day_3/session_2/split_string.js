// split string
function splitString(input, point) {
  input = input.toLowerCase();
  point = point.toLowerCase();
  var array = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i] == point) {
      array.push(" ");
    } else {
      array.push(input[i]);
    }
  }

  console.log(array.join(""));
}

splitString("fdfdamit Kumar jkdshfa asd", "a");
