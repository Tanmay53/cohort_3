// print odd number using for loop
function printOddForLoop(input) {
  if (Number(input) > 0) {
    for (var i = 1; i <= input; i += 2) {
      console.log(i);
    }
  } else {
    console.log("Wrong Input");
  }
}

// print odd number using while loop
function printOddWhileLoop(input) {
  if (Number(input) > 0) {
    var i = 1;
    while (i <= input) {
      console.log(i);
      i += 2;
    }
  } else {
    console.log("Wrong Input");
  }
}

printOddWhileLoop(0);

// input case
// -4, 53, 20, 0
