// 1st Method
// Sring Method
var number = 10101010101010;
var revNumber = 0;
// function reverseNumber(args) {
//   args = args.toString();
//   console.log((10).toString());
//   number = "";
//   for (i = args.length - 1; i >= 0; i--) {
//     number += args[i];
//   }
//   return number;
// }

// console.log(reverseNumber(number));

// 2nd Method
// Maths Method

function reverseNumber(args) {
  while (args > 0) {
    rem = args % 10;
    args = parseInt(args / 10);
    revNumber = revNumber * 10 + rem;
  }
  console.log(revNumber);
}

reverseNumber(number);
