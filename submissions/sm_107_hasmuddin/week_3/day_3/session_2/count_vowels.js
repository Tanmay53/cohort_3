var string = "Hello World";
var vowel = ["a", "e", "i", "o", "u"];
var count = 0;
function vowelCount() {
  for (var i = 0; i < string.length; i++) {
    for (j = 0; j < vowel.length; j++) {
      if (string[i] == vowel[j]) {
        count += 1;
      }
    }
  }
  console.log(count);
}
vowelCount();
