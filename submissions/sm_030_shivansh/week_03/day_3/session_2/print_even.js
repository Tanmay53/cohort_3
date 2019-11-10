// function to print even number from 0 to n using for loop

function evenNumbers(n) {
  for (var i = 0; i <= n; i += 2) {
    console.log(i);
  }
}

// function to print even number from 0 to n using while loop

function evenNum(n) {
  var i = 0;

  while (i <= n) {
    console.log(i);
    i += 2;
  }
}

console.log('using for loop');
evenNumbers(10);
console.log('using while loop');
evenNum(15);

// input - 10, 15
