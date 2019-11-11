var givenString = "Hello Krishna";
var vowels = ["a", "e", "i", "o", "u"];
var vowelCount = 0;
function countVowels(args) {
  for (i = 0; i < args.length; i++) {
    for (j = 0; j < vowels.length; j++) {
      if (args[i] === vowels[j]) {
        vowelCount++;
      }
    }
  }
  console.log("Count of Vowels in String is " + vowelCount);
}

countVowels(givenString);
