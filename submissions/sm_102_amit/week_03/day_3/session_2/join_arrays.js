// join array
function joinArray(input, point) {
  var string = "";
  for (var i = 0; i < input.length; i++) {
    string += input[i] + point;
  }

  console.log(string);
}

joinArray(["fdd", "ghgh"], "a");
