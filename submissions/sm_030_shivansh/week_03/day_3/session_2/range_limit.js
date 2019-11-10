// print numbers from 0 to n using for loop

function nNumbers(n) {
  for (var i = 0; i <= n; i++) {
    console.log(i);
  }
}

// print numbers from 0 to n using while loop

function firstN(n) {
  var i = 0;

  while (i <= n) {
    console.log(i);
    i++;
  }
}

console.log('using for loop');
nNumbers(10);
console.log('using while loop');
firstN(11);

//input 10 11
