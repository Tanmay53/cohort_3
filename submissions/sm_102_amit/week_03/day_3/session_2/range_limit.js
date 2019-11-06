// print number using for loop
function forLoop(input) {
  if (Number(input) > 0) {
    for (var i = 0; i <= input; i++) {
      console.log(i);
    }
  } else {
    console.log("Wrong Input");
  }
}
forLoop(9);
