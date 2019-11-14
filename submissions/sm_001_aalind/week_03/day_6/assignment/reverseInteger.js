function reverseInteger(num) {
  var rem, quo = Number(num);
  var rev_num = "";

  while(quo > 0) {
    rem = quo % 10;
    rev_num += rem;
    quo = Math.floor(quo/10);
  }

  return Number(rev_num);
}

console.log(reverseInteger(987654321))