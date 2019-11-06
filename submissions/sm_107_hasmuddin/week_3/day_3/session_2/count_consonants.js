var string = "Hello Masai School";
var vowel = ["a", "e", "i", "o", "u", " "];
var vowel_count = 0;
var len = string.length;
for (var i = 0; i < string.length; i++) {
  for (j = 0; j < vowel.length; j++) {
    if (string[i] == vowel[j]) {
      vowel_count += 1;
    }
  }
}
console.log(Number(len) - Number(vowel_count));
