// function to print numbers from 0 to number n using while loop

function printTill(n) {
  var i = 0;
  while (i <= n) {
    console.log(i);
    i++;
  }
}

// function to print numbers from 0 to number n using for loop

function printTillN(n) {
  for (var i = 0; i <= n; i++) {
    console.log(i);
  }
}

printTill(15);
printTillN(15);

// Input - 10, 15
