// reverse the string
function reverseString(input) {
  var start = "";
  for (var i = input.length - 1; i >= 0; i--) {
    start += input[i];
  }

  console.log(start);
}

reverseString("amit");

// function reverseString(input) {
//   // var i = input.length - 1;
//   var name = [];
//   for (var i = 0; i < input.length; i++) {
//     name.unshift(input[i]);
//   }
//   console.log(name.join(""));
// }

// reverseString("amit");
