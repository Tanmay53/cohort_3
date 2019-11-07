// count vowels
function countVowels(input) {
  var count = 0;
  input = input.toLowerCase();
  for (var i = 0; i < input.length; i++) {
    if (
      input[i] == "a" ||
      input[i] == "e" ||
      input[i] == "i" ||
      input[i] == "o" ||
      input[i] == "u"
    ) {
      count++;
    }
  }
  console.log(count);
}

countVowels("happy BirthDAY");
