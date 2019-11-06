var givenString = "Hey My Name Is Krishna Kant Sharma";
var splitCharacter = "k"; // I am taking space you can choose either any letter
var stringArray = [];
function splitString(args) {
  var partialString = "";
  for (i = 0; i < args.length; i++) {
    if (args[i] === splitCharacter) {
      stringArray.push(partialString);
      partialString = "";
    } else {
      partialString += args[i];
    }
  }
  stringArray.push(partialString);
  console.log(stringArray);
}

splitString(givenString.toLowerCase());
