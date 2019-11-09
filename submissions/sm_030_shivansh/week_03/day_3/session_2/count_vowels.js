// functions to count numbers of vowels in a string

function countVowels(str) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    switch (str[i]) {
      case 'a':
      case 'A':
      case 'e':
      case 'E':
      case 'i':
      case 'I':
      case 'o':
      case 'O':
      case 'u':
      case 'U':
        count++;
      default:
        continue;
    }
  }
  return count;
}

console.log(countVowels('Siddharth'));

// Input - "shivansh"  "SHIVANSH"  "Siddharth"
