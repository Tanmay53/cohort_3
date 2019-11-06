var givenString = "Krishna Sharma";
var consonant = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z"
];
var consonantCount = 0;
function countconsonant(args) {
  for (i = 0; i < args.length; i++) {
    for (j = 0; j < consonant.length; j++) {
      if (args[i] === consonant[j]) {
        ++consonantCount;
      }
    }
  }
  console.log("Count of Consonants in String is " + consonantCount);
}

countconsonant(givenString.toLowerCase());
