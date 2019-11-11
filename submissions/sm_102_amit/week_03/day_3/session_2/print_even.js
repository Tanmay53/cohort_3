// print even number using while loop
function printOddWhileLoop(input) {
  if (Number(input) >= 0) {
    var i = 0;
    while (i <= input) {
      console.log(i);
      i += 2;
    }
  } else {
    console.log("Wrong Input");
  }
}

printOddWhileLoop(35);

// input case
// -4, 53, 20, 0
