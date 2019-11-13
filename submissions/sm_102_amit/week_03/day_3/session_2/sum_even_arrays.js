// sum of even values in array
function arrEvenSum(input) {
  var sum = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i] % 2 == 0) {
      sum += input[i];
    }
  }
  console.log(sum);
}
arr = [1, 3, 9];
arrEvenSum(arr);
